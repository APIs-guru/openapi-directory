from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetManagedScalingPolicyXAmzTargetEnum(str, Enum):
    ELASTIC_MAP_REDUCE_GET_MANAGED_SCALING_POLICY = "ElasticMapReduce.GetManagedScalingPolicy"


@dataclass
class GetManagedScalingPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetManagedScalingPolicyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetManagedScalingPolicyRequest:
    headers: GetManagedScalingPolicyHeaders = field(default=None)
    request: shared.GetManagedScalingPolicyInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetManagedScalingPolicyResponse:
    content_type: str = field(default=None)
    get_managed_scaling_policy_output: Optional[shared.GetManagedScalingPolicyOutput] = field(default=None)
    status_code: int = field(default=None)
    
