from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RolesGetRolePermissionsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RolesGetRolePermissionsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class RolesGetRolePermissionsRequest:
    path_params: RolesGetRolePermissionsPathParams = field()
    query_params: RolesGetRolePermissionsQueryParams = field()
    

@dataclass
class RolesGetRolePermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    api_paged_response_api_models_permission_: Optional[shared.APIPagedResponseAPIModelsPermission] = field(default=None)
    
