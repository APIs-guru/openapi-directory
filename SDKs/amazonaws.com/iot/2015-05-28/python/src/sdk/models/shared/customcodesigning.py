from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomCodeSigning:
    r"""CustomCodeSigning
    Describes a custom method used to code sign a file.
    """
    
    certificate_chain: Optional[CodeSigningCertificateChain] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateChain') }})
    hash_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashAlgorithm') }})
    signature: Optional[CodeSigningSignature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    signature_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureAlgorithm') }})
    
