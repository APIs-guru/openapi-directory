from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import csrextensions
from . import keyalgorithm_enum
from . import signingalgorithm_enum
from . import asn1subject


@dataclass_json
@dataclass
class CertificateAuthorityConfiguration:
    csr_extensions: Optional[csrextensions.CsrExtensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsrExtensions' }})
    key_algorithm: keyalgorithm_enum.KeyAlgorithmEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyAlgorithm' }})
    signing_algorithm: signingalgorithm_enum.SigningAlgorithmEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAlgorithm' }})
    subject: asn1subject.Asn1Subject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    
