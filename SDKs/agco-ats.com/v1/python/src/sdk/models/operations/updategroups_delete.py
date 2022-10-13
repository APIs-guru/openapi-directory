from dataclasses import dataclass, field



@dataclass
class UpdateGroupsDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupsDeleteRequest:
    path_params: UpdateGroupsDeletePathParams = field(default=None)
    

@dataclass
class UpdateGroupsDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
