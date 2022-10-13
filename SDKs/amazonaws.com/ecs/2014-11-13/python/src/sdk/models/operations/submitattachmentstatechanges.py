from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SubmitAttachmentStateChangesXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_SUBMIT_ATTACHMENT_STATE_CHANGES = "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges"


@dataclass
class SubmitAttachmentStateChangesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SubmitAttachmentStateChangesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SubmitAttachmentStateChangesRequest:
    headers: SubmitAttachmentStateChangesHeaders = field(default=None)
    request: shared.SubmitAttachmentStateChangesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubmitAttachmentStateChangesResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    submit_attachment_state_changes_response: Optional[shared.SubmitAttachmentStateChangesResponse] = field(default=None)
    
