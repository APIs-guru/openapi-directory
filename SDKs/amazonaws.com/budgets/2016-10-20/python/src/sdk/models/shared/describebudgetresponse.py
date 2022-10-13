from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import budget


@dataclass_json
@dataclass
class DescribeBudgetResponse:
    budget: Optional[budget.Budget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Budget' }})
    
