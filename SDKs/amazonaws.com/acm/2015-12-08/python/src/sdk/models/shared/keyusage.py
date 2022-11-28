from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeyUsage:
    r"""KeyUsage
    The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.
    """
    
    name: Optional[KeyUsageNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
