from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListenerTLSValidationContext:
    r"""ListenerTLSValidationContext
    An object that represents a listener's Transport Layer Security (TLS) validation context.
    """
    
    trust: ListenerTLSValidationContextTrust = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trust') }})
    subject_alternative_names: Optional[SubjectAlternativeNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAlternativeNames') }})
    
