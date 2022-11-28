from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOnPremisesInstancesInput:
    r"""ListOnPremisesInstancesInput
    Represents the input of a <code>ListOnPremisesInstances</code> operation.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    registration_status: Optional[RegistrationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationStatus') }})
    tag_filters: Optional[List[TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFilters') }})
    
