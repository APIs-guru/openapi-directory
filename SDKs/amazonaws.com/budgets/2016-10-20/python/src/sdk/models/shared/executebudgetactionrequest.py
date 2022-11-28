from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecuteBudgetActionRequest:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    action_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionId') }})
    budget_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    execution_type: ExecutionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionType') }})
    
