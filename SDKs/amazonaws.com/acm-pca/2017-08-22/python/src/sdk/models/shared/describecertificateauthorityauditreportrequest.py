from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeCertificateAuthorityAuditReportRequest:
    audit_report_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuditReportId' }})
    certificate_authority_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    
