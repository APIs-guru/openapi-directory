from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domainvalidation
from . import extendedkeyusage
from . import failurereason_enum
from . import keyalgorithm_enum
from . import keyusage
from . import certificateoptions
from . import renewaleligibility_enum
from . import renewalsummary
from . import revocationreason_enum
from . import certificatestatus_enum
from . import certificatetype_enum


@dataclass_json
@dataclass
class CertificateDetail:
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateArn' }})
    certificate_authority_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    domain_validation_options: Optional[List[domainvalidation.DomainValidation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainValidationOptions' }})
    extended_key_usages: Optional[List[extendedkeyusage.ExtendedKeyUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedKeyUsages' }})
    failure_reason: Optional[failurereason_enum.FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    imported_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    in_use_by: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InUseBy' }})
    issued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Issuer' }})
    key_algorithm: Optional[keyalgorithm_enum.KeyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyAlgorithm' }})
    key_usages: Optional[List[keyusage.KeyUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyUsages' }})
    not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    options: Optional[certificateoptions.CertificateOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    renewal_eligibility: Optional[renewaleligibility_enum.RenewalEligibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RenewalEligibility' }})
    renewal_summary: Optional[renewalsummary.RenewalSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RenewalSummary' }})
    revocation_reason: Optional[revocationreason_enum.RevocationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RevocationReason' }})
    revoked_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RevokedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Serial' }})
    signature_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SignatureAlgorithm' }})
    status: Optional[certificatestatus_enum.CertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubjectAlternativeNames' }})
    type: Optional[certificatetype_enum.CertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
