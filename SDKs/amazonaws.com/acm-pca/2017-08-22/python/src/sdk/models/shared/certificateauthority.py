from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateAuthority:
    r"""CertificateAuthority
    Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html\">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html\">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html\">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM). 
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    certificate_authority_configuration: Optional[CertificateAuthorityConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityConfiguration') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    key_storage_security_standard: Optional[KeyStorageSecurityStandardEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyStorageSecurityStandard') }})
    last_state_change_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStateChangeAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotAfter'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotBefore'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerAccount') }})
    restorable_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestorableUntil'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    revocation_configuration: Optional[RevocationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevocationConfiguration') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Serial') }})
    status: Optional[CertificateAuthorityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    type: Optional[CertificateAuthorityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
