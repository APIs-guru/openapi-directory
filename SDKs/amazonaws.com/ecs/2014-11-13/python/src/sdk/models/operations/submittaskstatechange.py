from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SubmitTaskStateChangeXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_SUBMIT_TASK_STATE_CHANGE = "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange"


@dataclass
class SubmitTaskStateChangeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SubmitTaskStateChangeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SubmitTaskStateChangeRequest:
    headers: SubmitTaskStateChangeHeaders = field(default=None)
    request: shared.SubmitTaskStateChangeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubmitTaskStateChangeResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    submit_task_state_change_response: Optional[shared.SubmitTaskStateChangeResponse] = field(default=None)
    
