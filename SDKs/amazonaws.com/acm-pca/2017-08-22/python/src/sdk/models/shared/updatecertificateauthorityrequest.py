from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import revocationconfiguration
from . import certificateauthoritystatus_enum


@dataclass_json
@dataclass
class UpdateCertificateAuthorityRequest:
    certificate_authority_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    revocation_configuration: Optional[revocationconfiguration.RevocationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RevocationConfiguration' }})
    status: Optional[certificateauthoritystatus_enum.CertificateAuthorityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
