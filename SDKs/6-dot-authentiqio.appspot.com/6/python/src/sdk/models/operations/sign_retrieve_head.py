from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SignRetrieveHeadPathParams:
    job: str = field(default=None, metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignRetrieveHeadRequest:
    path_params: SignRetrieveHeadPathParams = field(default=None)
    

@dataclass
class SignRetrieveHeadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
