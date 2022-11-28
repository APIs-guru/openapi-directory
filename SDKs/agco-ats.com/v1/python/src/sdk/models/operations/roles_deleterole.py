from dataclasses import dataclass, field



@dataclass
class RolesDeleteRolePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RolesDeleteRoleRequest:
    path_params: RolesDeleteRolePathParams = field()
    

@dataclass
class RolesDeleteRoleResponse:
    content_type: str = field()
    status_code: int = field()
    
