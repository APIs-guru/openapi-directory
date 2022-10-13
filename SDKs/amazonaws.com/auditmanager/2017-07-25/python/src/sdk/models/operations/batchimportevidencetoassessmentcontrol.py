from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BatchImportEvidenceToAssessmentControlPathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    control_id: str = field(default=None, metadata={'path_param': { 'field_name': 'controlId', 'style': 'simple', 'explode': False }})
    control_set_id: str = field(default=None, metadata={'path_param': { 'field_name': 'controlSetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchImportEvidenceToAssessmentControlHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class BatchImportEvidenceToAssessmentControlRequestBody:
    manual_evidence: List[shared.ManualEvidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualEvidence' }})
    

@dataclass
class BatchImportEvidenceToAssessmentControlRequest:
    path_params: BatchImportEvidenceToAssessmentControlPathParams = field(default=None)
    headers: BatchImportEvidenceToAssessmentControlHeaders = field(default=None)
    request: BatchImportEvidenceToAssessmentControlRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchImportEvidenceToAssessmentControlResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    batch_import_evidence_to_assessment_control_response: Optional[shared.BatchImportEvidenceToAssessmentControlResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
