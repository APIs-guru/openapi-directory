from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SignRequestQueryParams:
    test: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'test', 'style': 'form', 'explode': True }})
    

@dataclass
class SignRequestRequest:
    query_params: SignRequestQueryParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass_json
@dataclass
class SignRequest201ApplicationJSON:
    job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class SignRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    sign_request_201_application_json_object: Optional[SignRequest201ApplicationJSON] = field(default=None)
    
