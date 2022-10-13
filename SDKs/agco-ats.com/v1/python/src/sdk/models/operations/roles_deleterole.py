from dataclasses import dataclass, field



@dataclass
class RolesDeleteRolePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RolesDeleteRoleRequest:
    path_params: RolesDeleteRolePathParams = field(default=None)
    

@dataclass
class RolesDeleteRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
