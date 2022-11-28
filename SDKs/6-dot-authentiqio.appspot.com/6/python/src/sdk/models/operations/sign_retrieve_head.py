from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SignRetrieveHeadPathParams:
    job: str = field(metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignRetrieveHeadRequest:
    path_params: SignRetrieveHeadPathParams = field()
    

@dataclass
class SignRetrieveHeadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    
