from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ModifyHapgXAmzTargetEnum(str, Enum):
    CLOUD_HSM_FRONTEND_SERVICE_MODIFY_HAPG = "CloudHsmFrontendService.ModifyHapg"


@dataclass
class ModifyHapgHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ModifyHapgXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyHapgRequest:
    headers: ModifyHapgHeaders = field(default=None)
    request: shared.ModifyHapgRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyHapgResponse:
    cloud_hsm_internal_exception: Optional[Any] = field(default=None)
    cloud_hsm_service_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    modify_hapg_response: Optional[shared.ModifyHapgResponse] = field(default=None)
    status_code: int = field(default=None)
    
