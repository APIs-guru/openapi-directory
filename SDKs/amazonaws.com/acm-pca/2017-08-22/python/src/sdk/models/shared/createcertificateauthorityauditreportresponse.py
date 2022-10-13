from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateCertificateAuthorityAuditReportResponse:
    audit_report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuditReportId' }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Key' }})
    
