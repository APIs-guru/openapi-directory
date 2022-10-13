from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeBudgetActionRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    action_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionId' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    
