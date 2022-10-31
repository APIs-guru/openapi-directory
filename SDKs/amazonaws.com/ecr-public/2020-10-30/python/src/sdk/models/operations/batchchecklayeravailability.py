from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchCheckLayerAvailabilityXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_BATCH_CHECK_LAYER_AVAILABILITY = "SpencerFrontendService.BatchCheckLayerAvailability"


@dataclass
class BatchCheckLayerAvailabilityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: BatchCheckLayerAvailabilityXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchCheckLayerAvailabilityRequest:
    headers: BatchCheckLayerAvailabilityHeaders = field(default=None)
    request: shared.BatchCheckLayerAvailabilityRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchCheckLayerAvailabilityResponse:
    batch_check_layer_availability_response: Optional[shared.BatchCheckLayerAvailabilityResponse] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    registry_not_found_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
