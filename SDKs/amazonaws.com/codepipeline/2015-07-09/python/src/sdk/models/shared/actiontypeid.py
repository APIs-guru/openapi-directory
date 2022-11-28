from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionTypeID:
    r"""ActionTypeID
    Represents information about an action type.
    """
    
    category: ActionCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    owner: ActionOwnerEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
