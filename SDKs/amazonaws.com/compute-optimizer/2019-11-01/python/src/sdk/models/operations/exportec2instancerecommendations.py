from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ExportEc2InstanceRecommendationsXAmzTargetEnum(str, Enum):
    COMPUTE_OPTIMIZER_SERVICE_EXPORT_EC2_INSTANCE_RECOMMENDATIONS = "ComputeOptimizerService.ExportEC2InstanceRecommendations"


@dataclass
class ExportEc2InstanceRecommendationsHeaders:
    x_amz_target: ExportEc2InstanceRecommendationsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportEc2InstanceRecommendationsRequest:
    headers: ExportEc2InstanceRecommendationsHeaders = field()
    request: shared.ExportEc2InstanceRecommendationsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExportEc2InstanceRecommendationsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    export_ec2_instance_recommendations_response: Optional[shared.ExportEc2InstanceRecommendationsResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    missing_authentication_token: Optional[Any] = field(default=None)
    opt_in_required_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
