from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAssessmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateAssessmentRequestBodyAssessmentReportsDestination:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    destination_type: Optional[shared.AssessmentReportDestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationType' }})
    

@dataclass_json
@dataclass
class CreateAssessmentRequestBodyScope:
    aws_accounts: Optional[List[shared.AwsAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccounts' }})
    aws_services: Optional[List[shared.AwsService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsServices' }})
    

@dataclass_json
@dataclass
class CreateAssessmentRequestBody:
    assessment_reports_destination: CreateAssessmentRequestBodyAssessmentReportsDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentReportsDestination' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    framework_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameworkId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    roles: List[shared.Role] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    scope: CreateAssessmentRequestBodyScope = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateAssessmentRequest:
    headers: CreateAssessmentHeaders = field(default=None)
    request: CreateAssessmentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAssessmentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_assessment_response: Optional[shared.CreateAssessmentResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
