from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import certificateauthorityconfiguration
from . import certificateauthoritytype_enum
from . import keystoragesecuritystandard_enum
from . import revocationconfiguration
from . import tag


@dataclass_json
@dataclass
class CreateCertificateAuthorityRequest:
    certificate_authority_configuration: certificateauthorityconfiguration.CertificateAuthorityConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityConfiguration' }})
    certificate_authority_type: certificateauthoritytype_enum.CertificateAuthorityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityType' }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    key_storage_security_standard: Optional[keystoragesecuritystandard_enum.KeyStorageSecurityStandardEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyStorageSecurityStandard' }})
    revocation_configuration: Optional[revocationconfiguration.RevocationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RevocationConfiguration' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
