from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAssessmentStatusPathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssessmentStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateAssessmentStatusRequestBodyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class UpdateAssessmentStatusRequestBody:
    status: UpdateAssessmentStatusRequestBodyStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class UpdateAssessmentStatusRequest:
    path_params: UpdateAssessmentStatusPathParams = field(default=None)
    headers: UpdateAssessmentStatusHeaders = field(default=None)
    request: UpdateAssessmentStatusRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAssessmentStatusResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_assessment_status_response: Optional[shared.UpdateAssessmentStatusResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
