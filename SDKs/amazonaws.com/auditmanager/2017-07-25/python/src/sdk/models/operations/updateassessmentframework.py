from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAssessmentFrameworkPathParams:
    framework_id: str = field(default=None, metadata={'path_param': { 'field_name': 'frameworkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssessmentFrameworkHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateAssessmentFrameworkRequestBody:
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceType' }})
    control_sets: List[shared.UpdateAssessmentFrameworkControlSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSets' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateAssessmentFrameworkRequest:
    path_params: UpdateAssessmentFrameworkPathParams = field(default=None)
    headers: UpdateAssessmentFrameworkHeaders = field(default=None)
    request: UpdateAssessmentFrameworkRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAssessmentFrameworkResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_assessment_framework_response: Optional[shared.UpdateAssessmentFrameworkResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
