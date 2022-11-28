from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SignRetrievePathParams:
    job: str = field(metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SignRetrieveJwt:
    exp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exp') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    sub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    

@dataclass
class SignRetrieveRequest:
    path_params: SignRetrievePathParams = field()
    

@dataclass
class SignRetrieveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    jwt: Optional[SignRetrieveJwt] = field(default=None)
    
