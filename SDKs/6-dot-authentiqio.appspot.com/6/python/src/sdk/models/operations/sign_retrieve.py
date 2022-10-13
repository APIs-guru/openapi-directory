from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SignRetrievePathParams:
    job: str = field(default=None, metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignRetrieveRequest:
    path_params: SignRetrievePathParams = field(default=None)
    

@dataclass_json
@dataclass
class SignRetrieve200ApplicationJSONJwt:
    exp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exp' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    sub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    

@dataclass
class SignRetrieveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    jwt: Optional[SignRetrieve200ApplicationJSONJwt] = field(default=None)
    status_code: int = field(default=None)
    
