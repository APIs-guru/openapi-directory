from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserPermissionsGetUsersPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserPermissionsGetUsersQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class UserPermissionsGetUsersRequest:
    path_params: UserPermissionsGetUsersPathParams = field()
    query_params: UserPermissionsGetUsersQueryParams = field()
    

@dataclass
class UserPermissionsGetUsersResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_api_models_user_: Optional[shared.APIPagedResponseAPIModelsUser] = field(default=None)
    
