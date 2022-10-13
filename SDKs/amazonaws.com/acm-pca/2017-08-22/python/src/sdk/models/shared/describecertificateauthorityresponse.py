from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import certificateauthority


@dataclass_json
@dataclass
class DescribeCertificateAuthorityResponse:
    certificate_authority: Optional[certificateauthority.CertificateAuthority] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthority' }})
    
