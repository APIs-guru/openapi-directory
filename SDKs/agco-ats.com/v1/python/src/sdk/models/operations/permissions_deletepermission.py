from dataclasses import dataclass, field



@dataclass
class PermissionsDeletePermissionPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PermissionsDeletePermissionRequest:
    path_params: PermissionsDeletePermissionPathParams = field()
    

@dataclass
class PermissionsDeletePermissionResponse:
    content_type: str = field()
    status_code: int = field()
    
