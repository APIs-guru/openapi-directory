from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BatchAssociateAssessmentReportEvidencePathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchAssociateAssessmentReportEvidenceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class BatchAssociateAssessmentReportEvidenceRequestBody:
    evidence_folder_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceFolderId' }})
    evidence_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceIds' }})
    

@dataclass
class BatchAssociateAssessmentReportEvidenceRequest:
    path_params: BatchAssociateAssessmentReportEvidencePathParams = field(default=None)
    headers: BatchAssociateAssessmentReportEvidenceHeaders = field(default=None)
    request: BatchAssociateAssessmentReportEvidenceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchAssociateAssessmentReportEvidenceResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    batch_associate_assessment_report_evidence_response: Optional[shared.BatchAssociateAssessmentReportEvidenceResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
