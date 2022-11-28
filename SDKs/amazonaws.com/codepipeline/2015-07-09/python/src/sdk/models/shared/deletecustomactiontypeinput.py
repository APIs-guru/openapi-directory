from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteCustomActionTypeInput:
    r"""DeleteCustomActionTypeInput
    Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.
    """
    
    category: ActionCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
