from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetAssessmentReportXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_GET_ASSESSMENT_REPORT = "InspectorService.GetAssessmentReport"


@dataclass
class GetAssessmentReportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetAssessmentReportXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssessmentReportRequest:
    headers: GetAssessmentReportHeaders = field(default=None)
    request: shared.GetAssessmentReportRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAssessmentReportResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    assessment_run_in_progress_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_assessment_report_response: Optional[shared.GetAssessmentReportResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    no_such_entity_exception: Optional[Any] = field(default=None)
    service_temporarily_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_feature_exception: Optional[Any] = field(default=None)
    
