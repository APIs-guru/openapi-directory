from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCategoriesGetUsersQueryParams:
    category_i_ds: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'categoryIDs', 'style': 'form', 'explode': True }})
    include_categories: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeCategories', 'style': 'form', 'explode': True }})
    include_users: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeUsers', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    user_i_ds: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIDs', 'style': 'form', 'explode': True }})
    user_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userSearch', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthorizationCategoriesGetUsersRequest:
    query_params: AuthorizationCategoriesGetUsersQueryParams = field(default=None)
    

@dataclass
class AuthorizationCategoriesGetUsersResponse:
    api_i_paged_response_authorization_codes_shared_models_category_user_report_: Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
