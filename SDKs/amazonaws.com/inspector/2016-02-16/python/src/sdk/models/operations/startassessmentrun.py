from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartAssessmentRunXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_START_ASSESSMENT_RUN = "InspectorService.StartAssessmentRun"


@dataclass
class StartAssessmentRunHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StartAssessmentRunXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartAssessmentRunRequest:
    headers: StartAssessmentRunHeaders = field(default=None)
    request: shared.StartAssessmentRunRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartAssessmentRunResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    agents_already_running_assessment_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_cross_account_role_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    no_such_entity_exception: Optional[Any] = field(default=None)
    service_temporarily_unavailable_exception: Optional[Any] = field(default=None)
    start_assessment_run_response: Optional[shared.StartAssessmentRunResponse] = field(default=None)
    status_code: int = field(default=None)
    
