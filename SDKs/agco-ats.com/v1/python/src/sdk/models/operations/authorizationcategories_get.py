from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCategoriesGetQueryParams:
    definition_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'definitionID', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userID', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthorizationCategoriesGetRequest:
    query_params: AuthorizationCategoriesGetQueryParams = field()
    

@dataclass
class AuthorizationCategoriesGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_authorization_codes_shared_models_category_: Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsCategory] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
