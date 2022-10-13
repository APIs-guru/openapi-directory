from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SignDeletePathParams:
    job: str = field(default=None, metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignDeleteRequest:
    path_params: SignDeletePathParams = field(default=None)
    

@dataclass_json
@dataclass
class SignDelete200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class SignDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    sign_delete_200_application_json_object: Optional[SignDelete200ApplicationJSON] = field(default=None)
    
