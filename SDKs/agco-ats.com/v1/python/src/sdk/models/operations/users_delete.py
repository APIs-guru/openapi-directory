from dataclasses import dataclass, field



@dataclass
class UsersDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteRequest:
    path_params: UsersDeletePathParams = field(default=None)
    

@dataclass
class UsersDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
