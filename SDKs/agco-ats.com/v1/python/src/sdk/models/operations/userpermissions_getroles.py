from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserPermissionsGetRolesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserPermissionsGetRolesQueryParams:
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Role', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class UserPermissionsGetRolesRequest:
    path_params: UserPermissionsGetRolesPathParams = field()
    query_params: UserPermissionsGetRolesQueryParams = field()
    

@dataclass
class UserPermissionsGetRolesResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_api_models_role_: Optional[shared.APIPagedResponseAPIModelsRole] = field(default=None)
    
