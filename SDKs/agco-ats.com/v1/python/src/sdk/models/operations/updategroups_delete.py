from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UpdateGroupsDeletePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupsDeleteRequest:
    path_params: UpdateGroupsDeletePathParams = field()
    

@dataclass
class UpdateGroupsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
