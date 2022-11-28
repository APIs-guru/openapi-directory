from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeScalingPlanResourcesXAmzTargetEnum(str, Enum):
    ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_DESCRIBE_SCALING_PLAN_RESOURCES = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources"


@dataclass
class DescribeScalingPlanResourcesHeaders:
    x_amz_target: DescribeScalingPlanResourcesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeScalingPlanResourcesRequest:
    headers: DescribeScalingPlanResourcesHeaders = field()
    request: shared.DescribeScalingPlanResourcesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeScalingPlanResourcesResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_update_exception: Optional[Any] = field(default=None)
    describe_scaling_plan_resources_response: Optional[shared.DescribeScalingPlanResourcesResponse] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
