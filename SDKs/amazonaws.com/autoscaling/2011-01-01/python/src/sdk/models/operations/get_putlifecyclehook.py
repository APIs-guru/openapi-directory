from dataclasses import dataclass, field
from typing import Enum,Optional

class GetPutLifecycleHookActionEnum(str, Enum):
    PUT_LIFECYCLE_HOOK = "PutLifecycleHook"

class GetPutLifecycleHookVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetPutLifecycleHookQueryParams:
    action: GetPutLifecycleHookActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    default_result: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DefaultResult', 'style': 'form', 'explode': True }})
    heartbeat_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'HeartbeatTimeout', 'style': 'form', 'explode': True }})
    lifecycle_hook_name: str = field(default=None, metadata={'query_param': { 'field_name': 'LifecycleHookName', 'style': 'form', 'explode': True }})
    lifecycle_transition: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LifecycleTransition', 'style': 'form', 'explode': True }})
    notification_metadata: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NotificationMetadata', 'style': 'form', 'explode': True }})
    notification_target_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NotificationTargetARN', 'style': 'form', 'explode': True }})
    role_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RoleARN', 'style': 'form', 'explode': True }})
    version: GetPutLifecycleHookVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPutLifecycleHookHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetPutLifecycleHookRequest:
    query_params: GetPutLifecycleHookQueryParams = field(default=None)
    headers: GetPutLifecycleHookHeaders = field(default=None)
    

@dataclass
class GetPutLifecycleHookResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
