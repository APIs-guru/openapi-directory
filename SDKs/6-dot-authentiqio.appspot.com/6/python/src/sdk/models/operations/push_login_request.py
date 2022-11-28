from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PushLoginRequestQueryParams:
    callback: str = field(metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PushLoginRequest200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class PushLoginRequestRequest:
    query_params: PushLoginRequestQueryParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass
class PushLoginRequestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    push_login_request_200_application_json_object: Optional[PushLoginRequest200ApplicationJSON] = field(default=None)
    
