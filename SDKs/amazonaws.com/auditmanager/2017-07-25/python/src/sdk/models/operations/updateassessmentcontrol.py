from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAssessmentControlPathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    control_id: str = field(default=None, metadata={'path_param': { 'field_name': 'controlId', 'style': 'simple', 'explode': False }})
    control_set_id: str = field(default=None, metadata={'path_param': { 'field_name': 'controlSetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssessmentControlHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateAssessmentControlRequestBodyControlStatusEnum(str, Enum):
    UNDER_REVIEW = "UNDER_REVIEW"
    REVIEWED = "REVIEWED"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class UpdateAssessmentControlRequestBody:
    comment_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentBody' }})
    control_status: Optional[UpdateAssessmentControlRequestBodyControlStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlStatus' }})
    

@dataclass
class UpdateAssessmentControlRequest:
    path_params: UpdateAssessmentControlPathParams = field(default=None)
    headers: UpdateAssessmentControlHeaders = field(default=None)
    request: UpdateAssessmentControlRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAssessmentControlResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_assessment_control_response: Optional[shared.UpdateAssessmentControlResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
