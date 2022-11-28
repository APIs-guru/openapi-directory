from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    r"""CreateAssessmentRequestBodyAssessmentReportsDestination
     The location in which Audit Manager saves assessment reports for the given assessment. 
    """
    
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_type: Optional[shared.AssessmentReportDestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationType') }})
    

@dataclass_json
@dataclass
class CreateAssessmentRequestBodyScope:
    r"""CreateAssessmentRequestBodyScope
     The wrapper that contains the accounts and services in scope for the assessment. 
    """
    
    aws_accounts: Optional[List[shared.AwsAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccounts') }})
    aws_services: Optional[List[shared.AwsService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsServices') }})
    

@dataclass_json
@dataclass
class CreateAssessmentRequestBody:
    assessment_reports_destination: CreateAssessmentRequestBodyAssessmentReportsDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentReportsDestination') }})
    framework_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameworkId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: List[shared.Role] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    scope: CreateAssessmentRequestBodyScope = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateAssessmentRequest:
    headers: CreateAssessmentHeaders = field()
    request: CreateAssessmentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAssessmentResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    create_assessment_response: Optional[shared.CreateAssessmentResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
