from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportCertificateAuthorityCertificateRequest:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    certificate_authority_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    certificate_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateChain' }})
    
