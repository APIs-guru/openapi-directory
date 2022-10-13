from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import action


@dataclass_json
@dataclass
class DeleteBudgetActionResponse:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    action: action.Action = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    
