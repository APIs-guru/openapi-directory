from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import action
from . import action


@dataclass_json
@dataclass
class UpdateBudgetActionResponse:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    new_action: action.Action = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewAction' }})
    old_action: action.Action = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OldAction' }})
    
