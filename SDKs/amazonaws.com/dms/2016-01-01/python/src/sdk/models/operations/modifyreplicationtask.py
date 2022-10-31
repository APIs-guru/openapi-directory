from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ModifyReplicationTaskXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_MODIFY_REPLICATION_TASK = "AmazonDMSv20160101.ModifyReplicationTask"


@dataclass
class ModifyReplicationTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ModifyReplicationTaskXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyReplicationTaskRequest:
    headers: ModifyReplicationTaskHeaders = field(default=None)
    request: shared.ModifyReplicationTaskMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyReplicationTaskResponse:
    content_type: str = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    kms_key_not_accessible_fault: Optional[Any] = field(default=None)
    modify_replication_task_response: Optional[shared.ModifyReplicationTaskResponse] = field(default=None)
    resource_already_exists_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
