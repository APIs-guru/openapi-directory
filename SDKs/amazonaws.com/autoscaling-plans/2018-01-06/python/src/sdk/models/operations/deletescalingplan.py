from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteScalingPlanXAmzTargetEnum(str, Enum):
    ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_DELETE_SCALING_PLAN = "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan"


@dataclass
class DeleteScalingPlanHeaders:
    x_amz_target: DeleteScalingPlanXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteScalingPlanRequest:
    headers: DeleteScalingPlanHeaders = field()
    request: shared.DeleteScalingPlanRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteScalingPlanResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_update_exception: Optional[Any] = field(default=None)
    delete_scaling_plan_response: Optional[dict[str, Any]] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    object_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
