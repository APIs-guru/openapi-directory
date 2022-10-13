from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keypair


@dataclass_json
@dataclass
class CreateKeysAndCertificateResponse:
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateId' }})
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificatePem' }})
    key_pair: Optional[keypair.KeyPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPair' }})
    
