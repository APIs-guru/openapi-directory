from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartTriggerXAmzTargetEnum(str, Enum):
    AWS_GLUE_START_TRIGGER = "AWSGlue.StartTrigger"


@dataclass
class StartTriggerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StartTriggerXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StartTriggerRequest:
    headers: StartTriggerHeaders = field(default=None)
    request: shared.StartTriggerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartTriggerResponse:
    concurrent_runs_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    operation_timeout_exception: Optional[Any] = field(default=None)
    resource_number_limit_exceeded_exception: Optional[Any] = field(default=None)
    start_trigger_response: Optional[shared.StartTriggerResponse] = field(default=None)
    status_code: int = field(default=None)
    
