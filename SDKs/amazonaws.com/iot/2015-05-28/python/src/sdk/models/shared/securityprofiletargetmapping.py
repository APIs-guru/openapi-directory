from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SecurityProfileTargetMapping:
    r"""SecurityProfileTargetMapping
    Information about a security profile and the target associated with it.
    """
    
    security_profile_identifier: Optional[SecurityProfileIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileIdentifier') }})
    target: Optional[SecurityProfileTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
