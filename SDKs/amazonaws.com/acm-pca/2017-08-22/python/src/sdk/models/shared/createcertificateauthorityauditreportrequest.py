from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCertificateAuthorityAuditReportRequest:
    audit_report_response_format: AuditReportResponseFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuditReportResponseFormat') }})
    certificate_authority_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    s3_bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    
