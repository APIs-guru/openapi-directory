from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import auditreportresponseformat_enum


@dataclass_json
@dataclass
class CreateCertificateAuthorityAuditReportRequest:
    audit_report_response_format: auditreportresponseformat_enum.AuditReportResponseFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuditReportResponseFormat' }})
    certificate_authority_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    s3_bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    
