from dataclasses import dataclass, field
from typing import Optional


@dataclass
class HeadKeyPkPathParams:
    pk: str = field(metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass
class HeadKeyPkRequest:
    path_params: HeadKeyPkPathParams = field()
    

@dataclass
class HeadKeyPkResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
