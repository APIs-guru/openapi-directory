from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnshareTarget:
    r"""UnshareTarget
    Identifier that contains details about the directory consumer account with whom the directory is being unshared.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    type: TargetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
