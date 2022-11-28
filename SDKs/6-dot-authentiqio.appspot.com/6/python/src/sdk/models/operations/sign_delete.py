from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SignDeletePathParams:
    job: str = field(metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SignDelete200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class SignDeleteRequest:
    path_params: SignDeletePathParams = field()
    

@dataclass
class SignDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    sign_delete_200_application_json_object: Optional[SignDelete200ApplicationJSON] = field(default=None)
    
