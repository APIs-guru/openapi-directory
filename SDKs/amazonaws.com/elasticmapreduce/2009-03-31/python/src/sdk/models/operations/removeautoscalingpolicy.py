from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RemoveAutoScalingPolicyXAmzTargetEnum(str, Enum):
    ELASTIC_MAP_REDUCE_REMOVE_AUTO_SCALING_POLICY = "ElasticMapReduce.RemoveAutoScalingPolicy"


@dataclass
class RemoveAutoScalingPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RemoveAutoScalingPolicyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAutoScalingPolicyRequest:
    headers: RemoveAutoScalingPolicyHeaders = field(default=None)
    request: shared.RemoveAutoScalingPolicyInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveAutoScalingPolicyResponse:
    content_type: str = field(default=None)
    remove_auto_scaling_policy_output: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
