from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SignUpdatePathParams:
    job: str = field(metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignUpdateRequest:
    path_params: SignUpdatePathParams = field()
    

@dataclass
class SignUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
