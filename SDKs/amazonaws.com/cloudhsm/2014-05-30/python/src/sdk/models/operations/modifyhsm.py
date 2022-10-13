from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ModifyHsmXAmzTargetEnum(str, Enum):
    CLOUD_HSM_FRONTEND_SERVICE_MODIFY_HSM = "CloudHsmFrontendService.ModifyHsm"


@dataclass
class ModifyHsmHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ModifyHsmXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ModifyHsmRequest:
    headers: ModifyHsmHeaders = field(default=None)
    request: shared.ModifyHsmRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyHsmResponse:
    cloud_hsm_internal_exception: Optional[Any] = field(default=None)
    cloud_hsm_service_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    modify_hsm_response: Optional[shared.ModifyHsmResponse] = field(default=None)
    status_code: int = field(default=None)
    
