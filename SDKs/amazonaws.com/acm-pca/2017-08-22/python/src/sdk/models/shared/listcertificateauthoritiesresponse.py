from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificateauthority


@dataclass_json
@dataclass
class ListCertificateAuthoritiesResponse:
    certificate_authorities: Optional[List[certificateauthority.CertificateAuthority]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorities' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
