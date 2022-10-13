from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SignConfirmPathParams:
    job: str = field(default=None, metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignConfirmRequest:
    path_params: SignConfirmPathParams = field(default=None)
    

@dataclass_json
@dataclass
class SignConfirm202ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class SignConfirmResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    sign_confirm_202_application_json_object: Optional[SignConfirm202ApplicationJSON] = field(default=None)
    
