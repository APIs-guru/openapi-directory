from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutLifecycleEventHookExecutionStatusXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_PUT_LIFECYCLE_EVENT_HOOK_EXECUTION_STATUS = "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus"


@dataclass
class PutLifecycleEventHookExecutionStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutLifecycleEventHookExecutionStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutLifecycleEventHookExecutionStatusRequest:
    headers: PutLifecycleEventHookExecutionStatusHeaders = field(default=None)
    request: shared.PutLifecycleEventHookExecutionStatusInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutLifecycleEventHookExecutionStatusResponse:
    content_type: str = field(default=None)
    deployment_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_id_required_exception: Optional[Any] = field(default=None)
    invalid_deployment_id_exception: Optional[Any] = field(default=None)
    invalid_lifecycle_event_hook_execution_id_exception: Optional[Any] = field(default=None)
    invalid_lifecycle_event_hook_execution_status_exception: Optional[Any] = field(default=None)
    lifecycle_event_already_completed_exception: Optional[Any] = field(default=None)
    put_lifecycle_event_hook_execution_status_output: Optional[shared.PutLifecycleEventHookExecutionStatusOutput] = field(default=None)
    status_code: int = field(default=None)
    unsupported_action_for_deployment_type_exception: Optional[Any] = field(default=None)
    
