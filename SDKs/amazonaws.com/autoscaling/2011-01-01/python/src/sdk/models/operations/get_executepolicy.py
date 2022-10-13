from dataclasses import dataclass, field
from typing import Enum,Optional

class GetExecutePolicyActionEnum(str, Enum):
    EXECUTE_POLICY = "ExecutePolicy"

class GetExecutePolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetExecutePolicyQueryParams:
    action: GetExecutePolicyActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    breach_threshold: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'BreachThreshold', 'style': 'form', 'explode': True }})
    honor_cooldown: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'HonorCooldown', 'style': 'form', 'explode': True }})
    metric_value: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'MetricValue', 'style': 'form', 'explode': True }})
    policy_name: str = field(default=None, metadata={'query_param': { 'field_name': 'PolicyName', 'style': 'form', 'explode': True }})
    version: GetExecutePolicyVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExecutePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetExecutePolicyRequest:
    query_params: GetExecutePolicyQueryParams = field(default=None)
    headers: GetExecutePolicyHeaders = field(default=None)
    

@dataclass
class GetExecutePolicyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
