from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCodesGetAuthorizationCodesQueryParams:
    code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    created_by_user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'createdByUserID', 'style': 'form', 'explode': True }})
    definition_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'definitionID', 'style': 'form', 'explode': True }})
    deleted_by_user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deletedByUserID', 'style': 'form', 'explode': True }})
    include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthorizationCodesGetAuthorizationCodesRequest:
    query_params: AuthorizationCodesGetAuthorizationCodesQueryParams = field(default=None)
    

@dataclass
class AuthorizationCodesGetAuthorizationCodesResponse:
    api_i_paged_response_authorization_codes_shared_models_authorization_code_: Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
