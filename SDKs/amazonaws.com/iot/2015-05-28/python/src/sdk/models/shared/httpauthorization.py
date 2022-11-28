from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPAuthorization:
    r"""HTTPAuthorization
    The authorization method used to send messages.
    """
    
    sigv4: Optional[SigV4Authorization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sigv4') }})
    
