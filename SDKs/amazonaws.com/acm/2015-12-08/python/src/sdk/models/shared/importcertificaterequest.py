from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class ImportCertificateRequest:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateArn' }})
    certificate_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateChain' }})
    private_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateKey' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
