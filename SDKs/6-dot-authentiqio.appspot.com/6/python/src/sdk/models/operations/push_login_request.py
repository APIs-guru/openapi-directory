from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class PushLoginRequestQueryParams:
    callback: str = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class PushLoginRequestRequest:
    query_params: PushLoginRequestQueryParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass_json
@dataclass
class PushLoginRequest200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class PushLoginRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    push_login_request_200_application_json_object: Optional[PushLoginRequest200ApplicationJSON] = field(default=None)
    
