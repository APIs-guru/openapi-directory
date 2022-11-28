from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UpdateGroupsAddUpdateGroupUserPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    user_id: int = field(metadata={'path_param': { 'field_name': 'userID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupsAddUpdateGroupUserRequest:
    path_params: UpdateGroupsAddUpdateGroupUserPathParams = field()
    

@dataclass
class UpdateGroupsAddUpdateGroupUserResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
