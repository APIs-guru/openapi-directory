from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import certificateauthorityconfiguration
from . import failurereason_enum
from . import keystoragesecuritystandard_enum
from . import revocationconfiguration
from . import certificateauthoritystatus_enum
from . import certificateauthoritytype_enum


@dataclass_json
@dataclass
class CertificateAuthority:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    certificate_authority_configuration: Optional[certificateauthorityconfiguration.CertificateAuthorityConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityConfiguration' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[failurereason_enum.FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    key_storage_security_standard: Optional[keystoragesecuritystandard_enum.KeyStorageSecurityStandardEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyStorageSecurityStandard' }})
    last_state_change_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStateChangeAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerAccount' }})
    restorable_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestorableUntil', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    revocation_configuration: Optional[revocationconfiguration.RevocationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RevocationConfiguration' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Serial' }})
    status: Optional[certificateauthoritystatus_enum.CertificateAuthorityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[certificateauthoritytype_enum.CertificateAuthorityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
