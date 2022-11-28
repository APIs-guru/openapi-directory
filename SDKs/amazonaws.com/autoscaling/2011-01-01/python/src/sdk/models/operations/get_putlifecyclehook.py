from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetPutLifecycleHookActionEnum(str, Enum):
    PUT_LIFECYCLE_HOOK = "PutLifecycleHook"

class GetPutLifecycleHookVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetPutLifecycleHookQueryParams:
    action: GetPutLifecycleHookActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = field(metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    lifecycle_hook_name: str = field(metadata={'query_param': { 'field_name': 'LifecycleHookName', 'style': 'form', 'explode': True }})
    version: GetPutLifecycleHookVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    default_result: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DefaultResult', 'style': 'form', 'explode': True }})
    heartbeat_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'HeartbeatTimeout', 'style': 'form', 'explode': True }})
    lifecycle_transition: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LifecycleTransition', 'style': 'form', 'explode': True }})
    notification_metadata: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NotificationMetadata', 'style': 'form', 'explode': True }})
    notification_target_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NotificationTargetARN', 'style': 'form', 'explode': True }})
    role_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RoleARN', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPutLifecycleHookHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPutLifecycleHookRequest:
    headers: GetPutLifecycleHookHeaders = field()
    query_params: GetPutLifecycleHookQueryParams = field()
    

@dataclass
class GetPutLifecycleHookResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
