from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DetectPhixAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_DETECT_PHI = "ComprehendMedical_20181030.DetectPHI"


@dataclass
class DetectPhiHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DetectPhixAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DetectPhiRequest:
    headers: DetectPhiHeaders = field(default=None)
    request: shared.DetectPhiRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DetectPhiResponse:
    content_type: str = field(default=None)
    detect_phi_response: Optional[shared.DetectPhiResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_encoding_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    text_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
