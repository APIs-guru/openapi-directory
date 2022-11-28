from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthResult:
    r"""AuthResult
    The authorizer result.
    """
    
    allowed: Optional[Allowed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed') }})
    auth_decision: Optional[AuthDecisionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authDecision') }})
    auth_info: Optional[AuthInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authInfo') }})
    denied: Optional[Denied] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denied') }})
    missing_context_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missingContextValues') }})
    
