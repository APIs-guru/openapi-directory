from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSettingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateSettingsRequestBodyDefaultAssessmentReportsDestination:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    destination_type: Optional[shared.AssessmentReportDestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationType' }})
    

@dataclass_json
@dataclass
class UpdateSettingsRequestBody:
    default_assessment_reports_destination: Optional[UpdateSettingsRequestBodyDefaultAssessmentReportsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAssessmentReportsDestination' }})
    default_process_owners: Optional[List[shared.Role]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultProcessOwners' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKey' }})
    sns_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snsTopic' }})
    

@dataclass
class UpdateSettingsRequest:
    headers: UpdateSettingsHeaders = field(default=None)
    request: UpdateSettingsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSettingsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_settings_response: Optional[shared.UpdateSettingsResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
