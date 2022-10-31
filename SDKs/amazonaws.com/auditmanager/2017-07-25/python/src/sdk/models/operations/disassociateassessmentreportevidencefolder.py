from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class DisassociateAssessmentReportEvidenceFolderPathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateAssessmentReportEvidenceFolderHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DisassociateAssessmentReportEvidenceFolderRequestBody:
    evidence_folder_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceFolderId' }})
    

@dataclass
class DisassociateAssessmentReportEvidenceFolderRequest:
    path_params: DisassociateAssessmentReportEvidenceFolderPathParams = field(default=None)
    headers: DisassociateAssessmentReportEvidenceFolderHeaders = field(default=None)
    request: DisassociateAssessmentReportEvidenceFolderRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateAssessmentReportEvidenceFolderResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    disassociate_assessment_report_evidence_folder_response: Optional[dict[str, Any]] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
