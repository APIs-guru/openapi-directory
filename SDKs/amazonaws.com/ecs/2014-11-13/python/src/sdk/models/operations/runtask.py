from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RunTaskXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_RUN_TASK = "AmazonEC2ContainerServiceV20141113.RunTask"


@dataclass
class RunTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RunTaskXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RunTaskRequest:
    headers: RunTaskHeaders = field(default=None)
    request: shared.RunTaskRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RunTaskResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    blocked_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    cluster_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    platform_task_definition_incompatibility_exception: Optional[Any] = field(default=None)
    platform_unknown_exception: Optional[Any] = field(default=None)
    run_task_response: Optional[shared.RunTaskResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_feature_exception: Optional[Any] = field(default=None)
    
