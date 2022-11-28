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
class UpdateSettingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateSettingsRequestBodyDefaultAssessmentReportsDestination:
    r"""UpdateSettingsRequestBodyDefaultAssessmentReportsDestination
     The location in which Audit Manager saves assessment reports for the given assessment. 
    """
    
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_type: Optional[shared.AssessmentReportDestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationType') }})
    

@dataclass_json
@dataclass
class UpdateSettingsRequestBody:
    default_assessment_reports_destination: Optional[UpdateSettingsRequestBodyDefaultAssessmentReportsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAssessmentReportsDestination') }})
    default_process_owners: Optional[List[shared.Role]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultProcessOwners') }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    sns_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsTopic') }})
    

@dataclass
class UpdateSettingsRequest:
    headers: UpdateSettingsHeaders = field()
    request: UpdateSettingsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    update_settings_response: Optional[shared.UpdateSettingsResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
