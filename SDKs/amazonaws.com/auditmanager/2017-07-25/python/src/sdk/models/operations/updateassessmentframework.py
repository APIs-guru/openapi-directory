from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateAssessmentFrameworkPathParams:
    framework_id: str = field(metadata={'path_param': { 'field_name': 'frameworkId', 'style': 'simple', 'explode': False }})
    

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
    control_sets: List[shared.UpdateAssessmentFrameworkControlSet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlSets') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass
class UpdateAssessmentFrameworkRequest:
    headers: UpdateAssessmentFrameworkHeaders = field()
    path_params: UpdateAssessmentFrameworkPathParams = field()
    request: UpdateAssessmentFrameworkRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAssessmentFrameworkResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_assessment_framework_response: Optional[shared.UpdateAssessmentFrameworkResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
