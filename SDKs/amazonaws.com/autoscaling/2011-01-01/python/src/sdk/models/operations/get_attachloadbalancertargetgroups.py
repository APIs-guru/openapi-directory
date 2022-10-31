from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetAttachLoadBalancerTargetGroupsActionEnum(str, Enum):
    ATTACH_LOAD_BALANCER_TARGET_GROUPS = "AttachLoadBalancerTargetGroups"

class GetAttachLoadBalancerTargetGroupsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetAttachLoadBalancerTargetGroupsQueryParams:
    action: GetAttachLoadBalancerTargetGroupsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    target_group_ar_ns: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'TargetGroupARNs', 'style': 'form', 'explode': True }})
    version: GetAttachLoadBalancerTargetGroupsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAttachLoadBalancerTargetGroupsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAttachLoadBalancerTargetGroupsRequest:
    query_params: GetAttachLoadBalancerTargetGroupsQueryParams = field(default=None)
    headers: GetAttachLoadBalancerTargetGroupsHeaders = field(default=None)
    

@dataclass
class GetAttachLoadBalancerTargetGroupsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
