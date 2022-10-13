from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetProtectionStatusXAmzTargetEnum(str, Enum):
    AWSFMS_20180101_GET_PROTECTION_STATUS = "AWSFMS_20180101.GetProtectionStatus"


@dataclass
class GetProtectionStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetProtectionStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetProtectionStatusRequest:
    headers: GetProtectionStatusHeaders = field(default=None)
    request: shared.GetProtectionStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetProtectionStatusResponse:
    content_type: str = field(default=None)
    get_protection_status_response: Optional[shared.GetProtectionStatusResponse] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
