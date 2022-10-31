from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetAutoScalingGroupRecommendationsXAmzTargetEnum(str, Enum):
    COMPUTE_OPTIMIZER_SERVICE_GET_AUTO_SCALING_GROUP_RECOMMENDATIONS = "ComputeOptimizerService.GetAutoScalingGroupRecommendations"


@dataclass
class GetAutoScalingGroupRecommendationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetAutoScalingGroupRecommendationsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutoScalingGroupRecommendationsRequest:
    headers: GetAutoScalingGroupRecommendationsHeaders = field(default=None)
    request: shared.GetAutoScalingGroupRecommendationsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAutoScalingGroupRecommendationsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_auto_scaling_group_recommendations_response: Optional[shared.GetAutoScalingGroupRecommendationsResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    missing_authentication_token: Optional[Any] = field(default=None)
    opt_in_required_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
