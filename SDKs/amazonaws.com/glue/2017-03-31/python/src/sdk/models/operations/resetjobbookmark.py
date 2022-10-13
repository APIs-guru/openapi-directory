from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ResetJobBookmarkXAmzTargetEnum(str, Enum):
    AWS_GLUE_RESET_JOB_BOOKMARK = "AWSGlue.ResetJobBookmark"


@dataclass
class ResetJobBookmarkHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ResetJobBookmarkXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ResetJobBookmarkRequest:
    headers: ResetJobBookmarkHeaders = field(default=None)
    request: shared.ResetJobBookmarkRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResetJobBookmarkResponse:
    content_type: str = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    operation_timeout_exception: Optional[Any] = field(default=None)
    reset_job_bookmark_response: Optional[shared.ResetJobBookmarkResponse] = field(default=None)
    status_code: int = field(default=None)
    
