from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteRemediationExceptionsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DELETE_REMEDIATION_EXCEPTIONS = "StarlingDoveService.DeleteRemediationExceptions"


@dataclass
class DeleteRemediationExceptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteRemediationExceptionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteRemediationExceptionsRequest:
    headers: DeleteRemediationExceptionsHeaders = field(default=None)
    request: shared.DeleteRemediationExceptionsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteRemediationExceptionsResponse:
    content_type: str = field(default=None)
    delete_remediation_exceptions_response: Optional[shared.DeleteRemediationExceptionsResponse] = field(default=None)
    no_such_remediation_exception_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
