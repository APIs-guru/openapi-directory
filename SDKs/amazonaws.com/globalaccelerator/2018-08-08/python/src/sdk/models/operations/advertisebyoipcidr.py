from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AdvertiseByoipCidrXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_ADVERTISE_BYOIP_CIDR = "GlobalAccelerator_V20180706.AdvertiseByoipCidr"


@dataclass
class AdvertiseByoipCidrHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AdvertiseByoipCidrXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AdvertiseByoipCidrRequest:
    headers: AdvertiseByoipCidrHeaders = field(default=None)
    request: shared.AdvertiseByoipCidrRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AdvertiseByoipCidrResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    advertise_byoip_cidr_response: Optional[shared.AdvertiseByoipCidrResponse] = field(default=None)
    byoip_cidr_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    incorrect_cidr_state_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
