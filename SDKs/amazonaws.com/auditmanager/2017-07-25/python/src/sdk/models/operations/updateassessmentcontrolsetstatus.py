from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAssessmentControlSetStatusPathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    control_set_id: str = field(default=None, metadata={'path_param': { 'field_name': 'controlSetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssessmentControlSetStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateAssessmentControlSetStatusRequestBodyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    UNDER_REVIEW = "UNDER_REVIEW"
    REVIEWED = "REVIEWED"


@dataclass_json
@dataclass
class UpdateAssessmentControlSetStatusRequestBody:
    comment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    status: UpdateAssessmentControlSetStatusRequestBodyStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class UpdateAssessmentControlSetStatusRequest:
    path_params: UpdateAssessmentControlSetStatusPathParams = field(default=None)
    headers: UpdateAssessmentControlSetStatusHeaders = field(default=None)
    request: UpdateAssessmentControlSetStatusRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAssessmentControlSetStatusResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_assessment_control_set_status_response: Optional[shared.UpdateAssessmentControlSetStatusResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
