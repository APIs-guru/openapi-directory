from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyUsage:
    crl_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CRLSign' }})
    data_encipherment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataEncipherment' }})
    decipher_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DecipherOnly' }})
    digital_signature: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DigitalSignature' }})
    encipher_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncipherOnly' }})
    key_agreement: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyAgreement' }})
    key_cert_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyCertSign' }})
    key_encipherment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyEncipherment' }})
    non_repudiation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonRepudiation' }})
    
