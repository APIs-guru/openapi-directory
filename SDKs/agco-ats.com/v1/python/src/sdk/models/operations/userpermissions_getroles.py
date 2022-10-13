from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserPermissionsGetRolesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserPermissionsGetRolesQueryParams:
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Role', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class UserPermissionsGetRolesRequest:
    path_params: UserPermissionsGetRolesPathParams = field(default=None)
    query_params: UserPermissionsGetRolesQueryParams = field(default=None)
    

@dataclass
class UserPermissionsGetRolesResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_api_models_role_: Optional[shared.APIPagedResponseAPIModelsRole] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
