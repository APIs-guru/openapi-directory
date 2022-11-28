from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class InvokeDeviceMethodPathParams:
    device_id: str = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvokeDeviceMethodHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class InvokeDeviceMethodRequestBodyDeviceMethod:
    r"""InvokeDeviceMethodRequestBodyDeviceMethod
    The device method to invoke.
    """
    
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceType') }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MethodName') }})
    

@dataclass_json
@dataclass
class InvokeDeviceMethodRequestBody:
    device_method: Optional[InvokeDeviceMethodRequestBodyDeviceMethod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMethod') }})
    device_method_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMethodParameters') }})
    

@dataclass
class InvokeDeviceMethodRequest:
    headers: InvokeDeviceMethodHeaders = field()
    path_params: InvokeDeviceMethodPathParams = field()
    request: InvokeDeviceMethodRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvokeDeviceMethodResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    invoke_device_method_response: Optional[shared.InvokeDeviceMethodResponse] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    range_not_satisfiable_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
