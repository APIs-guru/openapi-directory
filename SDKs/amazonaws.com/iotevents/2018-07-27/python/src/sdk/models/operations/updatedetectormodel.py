from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateDetectorModelPathParams:
    detector_model_name: str = field(metadata={'path_param': { 'field_name': 'detectorModelName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDetectorModelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDetectorModelRequestBodyDetectorModelDefinition:
    r"""UpdateDetectorModelRequestBodyDetectorModelDefinition
    Information that defines how a detector operates.
    """
    
    initial_state_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialStateName') }})
    states: Optional[List[shared.State]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('states') }})
    
class UpdateDetectorModelRequestBodyEvaluationMethodEnum(str, Enum):
    BATCH = "BATCH"
    SERIAL = "SERIAL"


@dataclass_json
@dataclass
class UpdateDetectorModelRequestBody:
    detector_model_definition: UpdateDetectorModelRequestBodyDetectorModelDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelDefinition') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    detector_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelDescription') }})
    evaluation_method: Optional[UpdateDetectorModelRequestBodyEvaluationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMethod') }})
    

@dataclass
class UpdateDetectorModelRequest:
    headers: UpdateDetectorModelHeaders = field()
    path_params: UpdateDetectorModelPathParams = field()
    request: UpdateDetectorModelRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDetectorModelResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_detector_model_response: Optional[shared.UpdateDetectorModelResponse] = field(default=None)
    
