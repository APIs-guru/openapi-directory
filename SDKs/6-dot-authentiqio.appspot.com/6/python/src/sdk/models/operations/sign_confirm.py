from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SignConfirmPathParams:
    job: str = field(metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SignConfirm202ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class SignConfirmRequest:
    path_params: SignConfirmPathParams = field()
    

@dataclass
class SignConfirmResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    sign_confirm_202_application_json_object: Optional[SignConfirm202ApplicationJSON] = field(default=None)
    
