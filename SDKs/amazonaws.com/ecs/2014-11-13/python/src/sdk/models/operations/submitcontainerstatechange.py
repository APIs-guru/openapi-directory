from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SubmitContainerStateChangeXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_SUBMIT_CONTAINER_STATE_CHANGE = "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange"


@dataclass
class SubmitContainerStateChangeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: SubmitContainerStateChangeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubmitContainerStateChangeRequest:
    headers: SubmitContainerStateChangeHeaders = field(default=None)
    request: shared.SubmitContainerStateChangeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubmitContainerStateChangeResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    submit_container_state_change_response: Optional[shared.SubmitContainerStateChangeResponse] = field(default=None)
    
