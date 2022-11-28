from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TLSValidationContextTrust:
    r"""TLSValidationContextTrust
    An object that represents a Transport Layer Security (TLS) validation context trust.
    """
    
    acm: Optional[TLSValidationContextAcmTrust] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acm') }})
    file: Optional[TLSValidationContextFileTrust] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[TLSValidationContextSdsTrust] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
