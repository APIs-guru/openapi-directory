from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SignRequestQueryParams:
    test: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'test', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SignRequest201ApplicationJSON:
    job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class SignRequestRequest:
    query_params: SignRequestQueryParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass
class SignRequestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    sign_request_201_application_json_object: Optional[SignRequest201ApplicationJSON] = field(default=None)
    
