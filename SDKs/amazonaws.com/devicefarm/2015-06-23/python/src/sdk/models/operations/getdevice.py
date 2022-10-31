from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetDeviceXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_GET_DEVICE = "DeviceFarm_20150623.GetDevice"


@dataclass
class GetDeviceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetDeviceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceRequest:
    headers: GetDeviceHeaders = field(default=None)
    request: shared.GetDeviceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDeviceResponse:
    argument_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_device_result: Optional[shared.GetDeviceResult] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_account_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
