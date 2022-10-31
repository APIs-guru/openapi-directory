from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAssessmentPathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssessmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateAssessmentRequestBodyAssessmentReportsDestination:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    destination_type: Optional[shared.AssessmentReportDestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationType' }})
    

@dataclass_json
@dataclass
class UpdateAssessmentRequestBodyScope:
    aws_accounts: Optional[List[shared.AwsAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccounts' }})
    aws_services: Optional[List[shared.AwsService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsServices' }})
    

@dataclass_json
@dataclass
class UpdateAssessmentRequestBody:
    assessment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentDescription' }})
    assessment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentName' }})
    assessment_reports_destination: Optional[UpdateAssessmentRequestBodyAssessmentReportsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentReportsDestination' }})
    roles: Optional[List[shared.Role]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    scope: UpdateAssessmentRequestBodyScope = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    

@dataclass
class UpdateAssessmentRequest:
    path_params: UpdateAssessmentPathParams = field(default=None)
    headers: UpdateAssessmentHeaders = field(default=None)
    request: UpdateAssessmentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAssessmentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_assessment_response: Optional[shared.UpdateAssessmentResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
