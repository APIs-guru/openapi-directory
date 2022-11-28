from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateDetail:
    r"""CertificateDetail
    Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request. 
    """
    
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    certificate_authority_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    domain_validation_options: Optional[List[DomainValidation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainValidationOptions') }})
    extended_key_usages: Optional[List[ExtendedKeyUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsages') }})
    failure_reason: Optional[FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    imported_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    in_use_by: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InUseBy') }})
    issued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    key_algorithm: Optional[KeyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyAlgorithm') }})
    key_usages: Optional[List[KeyUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsages') }})
    not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotAfter'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotBefore'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    options: Optional[CertificateOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    renewal_eligibility: Optional[RenewalEligibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalEligibility') }})
    renewal_summary: Optional[RenewalSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalSummary') }})
    revocation_reason: Optional[RevocationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevocationReason') }})
    revoked_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevokedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Serial') }})
    signature_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignatureAlgorithm') }})
    status: Optional[CertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubjectAlternativeNames') }})
    type: Optional[CertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
