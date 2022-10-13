from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RolesGetRolePermissionsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RolesGetRolePermissionsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class RolesGetRolePermissionsRequest:
    path_params: RolesGetRolePermissionsPathParams = field(default=None)
    query_params: RolesGetRolePermissionsQueryParams = field(default=None)
    

@dataclass
class RolesGetRolePermissionsResponse:
    api_paged_response_api_models_permission_: Optional[shared.APIPagedResponseAPIModelsPermission] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
