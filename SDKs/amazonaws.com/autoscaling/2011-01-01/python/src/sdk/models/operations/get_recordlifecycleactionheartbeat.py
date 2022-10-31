from dataclasses import dataclass, field
from typing import Enum,Optional

class GetRecordLifecycleActionHeartbeatActionEnum(str, Enum):
    RECORD_LIFECYCLE_ACTION_HEARTBEAT = "RecordLifecycleActionHeartbeat"

class GetRecordLifecycleActionHeartbeatVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetRecordLifecycleActionHeartbeatQueryParams:
    action: GetRecordLifecycleActionHeartbeatActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    instance_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    lifecycle_action_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LifecycleActionToken', 'style': 'form', 'explode': True }})
    lifecycle_hook_name: str = field(default=None, metadata={'query_param': { 'field_name': 'LifecycleHookName', 'style': 'form', 'explode': True }})
    version: GetRecordLifecycleActionHeartbeatVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecordLifecycleActionHeartbeatHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecordLifecycleActionHeartbeatRequest:
    query_params: GetRecordLifecycleActionHeartbeatQueryParams = field(default=None)
    headers: GetRecordLifecycleActionHeartbeatHeaders = field(default=None)
    

@dataclass
class GetRecordLifecycleActionHeartbeatResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
