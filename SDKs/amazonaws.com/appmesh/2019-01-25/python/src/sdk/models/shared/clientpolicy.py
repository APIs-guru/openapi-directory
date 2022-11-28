from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClientPolicy:
    r"""ClientPolicy
    An object that represents a client policy.
    """
    
    tls: Optional[ClientPolicyTLS] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
