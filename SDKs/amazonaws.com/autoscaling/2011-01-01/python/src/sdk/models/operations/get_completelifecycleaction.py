from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCompleteLifecycleActionActionEnum(str, Enum):
    COMPLETE_LIFECYCLE_ACTION = "CompleteLifecycleAction"

class GetCompleteLifecycleActionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetCompleteLifecycleActionQueryParams:
    action: GetCompleteLifecycleActionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    instance_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    lifecycle_action_result: str = field(default=None, metadata={'query_param': { 'field_name': 'LifecycleActionResult', 'style': 'form', 'explode': True }})
    lifecycle_action_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LifecycleActionToken', 'style': 'form', 'explode': True }})
    lifecycle_hook_name: str = field(default=None, metadata={'query_param': { 'field_name': 'LifecycleHookName', 'style': 'form', 'explode': True }})
    version: GetCompleteLifecycleActionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCompleteLifecycleActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCompleteLifecycleActionRequest:
    query_params: GetCompleteLifecycleActionQueryParams = field(default=None)
    headers: GetCompleteLifecycleActionHeaders = field(default=None)
    

@dataclass
class GetCompleteLifecycleActionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
