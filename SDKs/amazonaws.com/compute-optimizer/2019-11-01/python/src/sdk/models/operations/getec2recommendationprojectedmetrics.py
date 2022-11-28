from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetEc2RecommendationProjectedMetricsXAmzTargetEnum(str, Enum):
    COMPUTE_OPTIMIZER_SERVICE_GET_EC2_RECOMMENDATION_PROJECTED_METRICS = "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics"


@dataclass
class GetEc2RecommendationProjectedMetricsHeaders:
    x_amz_target: GetEc2RecommendationProjectedMetricsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEc2RecommendationProjectedMetricsRequest:
    headers: GetEc2RecommendationProjectedMetricsHeaders = field()
    request: shared.GetEc2RecommendationProjectedMetricsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetEc2RecommendationProjectedMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    get_ec2_recommendation_projected_metrics_response: Optional[shared.GetEc2RecommendationProjectedMetricsResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    missing_authentication_token: Optional[Any] = field(default=None)
    opt_in_required_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
