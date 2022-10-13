from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class MoveReplicationTaskXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_MOVE_REPLICATION_TASK = "AmazonDMSv20160101.MoveReplicationTask"


@dataclass
class MoveReplicationTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: MoveReplicationTaskXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class MoveReplicationTaskRequest:
    headers: MoveReplicationTaskHeaders = field(default=None)
    request: shared.MoveReplicationTaskMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MoveReplicationTaskResponse:
    access_denied_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    kms_key_not_accessible_fault: Optional[Any] = field(default=None)
    move_replication_task_response: Optional[shared.MoveReplicationTaskResponse] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    resource_quota_exceeded_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
