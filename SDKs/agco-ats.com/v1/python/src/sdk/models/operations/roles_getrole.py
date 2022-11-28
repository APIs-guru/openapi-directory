from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RolesGetRolePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RolesGetRoleRequest:
    path_params: RolesGetRolePathParams = field()
    

@dataclass
class RolesGetRoleResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_role: Optional[shared.APIModelsRole] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
