from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams:
    category_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'categoryID', 'style': 'form', 'explode': True }})
    created_by_user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'createdByUserID', 'style': 'form', 'explode': True }})
    deleted_by_user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deletedByUserID', 'style': 'form', 'explode': True }})
    include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest:
    query_params: AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams = field()
    

@dataclass
class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_authorization_codes_shared_models_authorization_code_definition_: Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
