from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetManagedScalingPolicyXAmzTargetEnum(str, Enum):
    ELASTIC_MAP_REDUCE_GET_MANAGED_SCALING_POLICY = "ElasticMapReduce.GetManagedScalingPolicy"


@dataclass
class GetManagedScalingPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetManagedScalingPolicyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetManagedScalingPolicyRequest:
    headers: GetManagedScalingPolicyHeaders = field(default=None)
    request: shared.GetManagedScalingPolicyInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetManagedScalingPolicyResponse:
    content_type: str = field(default=None)
    get_managed_scaling_policy_output: Optional[shared.GetManagedScalingPolicyOutput] = field(default=None)
    status_code: int = field(default=None)
    
