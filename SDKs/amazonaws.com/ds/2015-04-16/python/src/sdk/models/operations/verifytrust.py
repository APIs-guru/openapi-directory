from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class VerifyTrustXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_VERIFY_TRUST = "DirectoryService_20150416.VerifyTrust"


@dataclass
class VerifyTrustHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: VerifyTrustXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class VerifyTrustRequest:
    headers: VerifyTrustHeaders = field(default=None)
    request: shared.VerifyTrustRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VerifyTrustResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    entity_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    verify_trust_result: Optional[shared.VerifyTrustResult] = field(default=None)
    
