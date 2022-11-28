from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeBudgetActionRequest:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    action_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionId') }})
    budget_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    
