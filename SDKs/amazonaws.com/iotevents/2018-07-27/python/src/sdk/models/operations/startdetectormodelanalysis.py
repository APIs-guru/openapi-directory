from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartDetectorModelAnalysisHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartDetectorModelAnalysisRequestBodyDetectorModelDefinition:
    initial_state_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialStateName' }})
    states: Optional[List[shared.State]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'states' }})
    

@dataclass_json
@dataclass
class StartDetectorModelAnalysisRequestBody:
    detector_model_definition: StartDetectorModelAnalysisRequestBodyDetectorModelDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelDefinition' }})
    

@dataclass
class StartDetectorModelAnalysisRequest:
    headers: StartDetectorModelAnalysisHeaders = field(default=None)
    request: StartDetectorModelAnalysisRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartDetectorModelAnalysisResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    start_detector_model_analysis_response: Optional[shared.StartDetectorModelAnalysisResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
