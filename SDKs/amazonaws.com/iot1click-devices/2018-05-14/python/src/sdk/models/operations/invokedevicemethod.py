from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class InvokeDeviceMethodPathParams:
    device_id: str = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

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
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceType' }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MethodName' }})
    

@dataclass_json
@dataclass
class InvokeDeviceMethodRequestBody:
    device_method: Optional[InvokeDeviceMethodRequestBodyDeviceMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMethod' }})
    device_method_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMethodParameters' }})
    

@dataclass
class InvokeDeviceMethodRequest:
    path_params: InvokeDeviceMethodPathParams = field(default=None)
    headers: InvokeDeviceMethodHeaders = field(default=None)
    request: InvokeDeviceMethodRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvokeDeviceMethodResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    invoke_device_method_response: Optional[shared.InvokeDeviceMethodResponse] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    range_not_satisfiable_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
