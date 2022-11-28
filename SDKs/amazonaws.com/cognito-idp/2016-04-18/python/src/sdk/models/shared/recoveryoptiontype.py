from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecoveryOptionType:
    r"""RecoveryOptionType
    A map containing a priority as a key, and recovery method name as a value.
    """
    
    name: RecoveryOptionNameTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    
