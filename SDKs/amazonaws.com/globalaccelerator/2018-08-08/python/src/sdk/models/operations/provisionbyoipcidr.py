from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ProvisionByoipCidrXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_PROVISION_BYOIP_CIDR = "GlobalAccelerator_V20180706.ProvisionByoipCidr"


@dataclass
class ProvisionByoipCidrHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ProvisionByoipCidrXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ProvisionByoipCidrRequest:
    headers: ProvisionByoipCidrHeaders = field(default=None)
    request: shared.ProvisionByoipCidrRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProvisionByoipCidrResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    incorrect_cidr_state_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    provision_byoip_cidr_response: Optional[shared.ProvisionByoipCidrResponse] = field(default=None)
    status_code: int = field(default=None)
    
