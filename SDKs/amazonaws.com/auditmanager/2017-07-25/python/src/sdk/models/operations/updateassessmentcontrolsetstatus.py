from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateAssessmentControlSetStatusPathParams:
    assessment_id: str = field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    control_set_id: str = field(metadata={'path_param': { 'field_name': 'controlSetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssessmentControlSetStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateAssessmentControlSetStatusRequestBodyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    UNDER_REVIEW = "UNDER_REVIEW"
    REVIEWED = "REVIEWED"


@dataclass_json
@dataclass
class UpdateAssessmentControlSetStatusRequestBody:
    comment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    status: UpdateAssessmentControlSetStatusRequestBodyStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class UpdateAssessmentControlSetStatusRequest:
    headers: UpdateAssessmentControlSetStatusHeaders = field()
    path_params: UpdateAssessmentControlSetStatusPathParams = field()
    request: UpdateAssessmentControlSetStatusRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAssessmentControlSetStatusResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_assessment_control_set_status_response: Optional[shared.UpdateAssessmentControlSetStatusResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
