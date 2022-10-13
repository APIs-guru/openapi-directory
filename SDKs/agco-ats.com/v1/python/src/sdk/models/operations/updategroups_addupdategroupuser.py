from dataclasses import dataclass, field



@dataclass
class UpdateGroupsAddUpdateGroupUserPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupsAddUpdateGroupUserRequest:
    path_params: UpdateGroupsAddUpdateGroupUserPathParams = field(default=None)
    

@dataclass
class UpdateGroupsAddUpdateGroupUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
