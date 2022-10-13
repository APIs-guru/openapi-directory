from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class ImportCertificateMessage:
    certificate_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateIdentifier' }})
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificatePem' }})
    certificate_wallet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateWallet' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
