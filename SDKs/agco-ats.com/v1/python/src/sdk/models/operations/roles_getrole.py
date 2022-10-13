from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RolesGetRolePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RolesGetRoleRequest:
    path_params: RolesGetRolePathParams = field(default=None)
    

@dataclass
class RolesGetRoleResponse:
    api_models_role: Optional[shared.APIModelsRole] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
