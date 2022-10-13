from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PermissionsGetPermissionPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PermissionsGetPermissionRequest:
    path_params: PermissionsGetPermissionPathParams = field(default=None)
    

@dataclass
class PermissionsGetPermissionResponse:
    api_models_permission: Optional[shared.APIModelsPermission] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
