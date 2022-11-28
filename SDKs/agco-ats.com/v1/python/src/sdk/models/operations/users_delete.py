from dataclasses import dataclass, field



@dataclass
class UsersDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteRequest:
    path_params: UsersDeletePathParams = field()
    

@dataclass
class UsersDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
