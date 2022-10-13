from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import budget


@dataclass_json
@dataclass
class UpdateBudgetRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    new_budget: budget.Budget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewBudget' }})
    
