from dataclasses import dataclass, field



@dataclass
class PermissionsDeletePermissionPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PermissionsDeletePermissionRequest:
    path_params: PermissionsDeletePermissionPathParams = field(default=None)
    

@dataclass
class PermissionsDeletePermissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
