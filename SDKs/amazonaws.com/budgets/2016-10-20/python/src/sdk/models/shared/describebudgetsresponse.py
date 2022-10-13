from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import budget


@dataclass_json
@dataclass
class DescribeBudgetsResponse:
    budgets: Optional[List[budget.Budget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Budgets' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
