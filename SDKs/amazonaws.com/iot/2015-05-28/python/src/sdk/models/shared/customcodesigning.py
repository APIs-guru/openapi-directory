from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import codesigningcertificatechain
from . import codesigningsignature


@dataclass_json
@dataclass
class CustomCodeSigning:
    certificate_chain: Optional[codesigningcertificatechain.CodeSigningCertificateChain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateChain' }})
    hash_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashAlgorithm' }})
    signature: Optional[codesigningsignature.CodeSigningSignature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    signature_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureAlgorithm' }})
    
