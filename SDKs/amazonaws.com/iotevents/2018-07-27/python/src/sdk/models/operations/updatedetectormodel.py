from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDetectorModelPathParams:
    detector_model_name: str = field(default=None, metadata={'path_param': { 'field_name': 'detectorModelName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDetectorModelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateDetectorModelRequestBodyDetectorModelDefinition:
    initial_state_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialStateName' }})
    states: Optional[List[shared.State]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'states' }})
    
class UpdateDetectorModelRequestBodyEvaluationMethodEnum(str, Enum):
    BATCH = "BATCH"
    SERIAL = "SERIAL"


@dataclass_json
@dataclass
class UpdateDetectorModelRequestBody:
    detector_model_definition: UpdateDetectorModelRequestBodyDetectorModelDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelDefinition' }})
    detector_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelDescription' }})
    evaluation_method: Optional[UpdateDetectorModelRequestBodyEvaluationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMethod' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    

@dataclass
class UpdateDetectorModelRequest:
    path_params: UpdateDetectorModelPathParams = field(default=None)
    headers: UpdateDetectorModelHeaders = field(default=None)
    request: UpdateDetectorModelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDetectorModelResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_detector_model_response: Optional[shared.UpdateDetectorModelResponse] = field(default=None)
    
