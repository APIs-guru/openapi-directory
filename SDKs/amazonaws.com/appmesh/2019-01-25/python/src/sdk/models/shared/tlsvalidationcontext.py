from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TLSValidationContext:
    r"""TLSValidationContext
    An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
    """
    
    trust: TLSValidationContextTrust = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trust') }})
    subject_alternative_names: Optional[SubjectAlternativeNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAlternativeNames') }})
    
