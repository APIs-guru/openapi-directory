from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetCertificateResponse:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    certificate_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateChain' }})
    
