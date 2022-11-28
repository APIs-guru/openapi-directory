from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PermissionsGetPermissionPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PermissionsGetPermissionRequest:
    path_params: PermissionsGetPermissionPathParams = field()
    

@dataclass
class PermissionsGetPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_permission: Optional[shared.APIModelsPermission] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
