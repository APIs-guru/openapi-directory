from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class BatchImportEvidenceToAssessmentControlPathParams:
    assessment_id: str = field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    control_id: str = field(metadata={'path_param': { 'field_name': 'controlId', 'style': 'simple', 'explode': False }})
    control_set_id: str = field(metadata={'path_param': { 'field_name': 'controlSetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchImportEvidenceToAssessmentControlHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BatchImportEvidenceToAssessmentControlRequestBody:
    manual_evidence: List[shared.ManualEvidence] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualEvidence') }})
    

@dataclass
class BatchImportEvidenceToAssessmentControlRequest:
    headers: BatchImportEvidenceToAssessmentControlHeaders = field()
    path_params: BatchImportEvidenceToAssessmentControlPathParams = field()
    request: BatchImportEvidenceToAssessmentControlRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchImportEvidenceToAssessmentControlResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    batch_import_evidence_to_assessment_control_response: Optional[shared.BatchImportEvidenceToAssessmentControlResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
