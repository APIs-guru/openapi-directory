from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import budgetperformancehistory


@dataclass_json
@dataclass
class DescribeBudgetPerformanceHistoryResponse:
    budget_performance_history: Optional[budgetperformancehistory.BudgetPerformanceHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetPerformanceHistory' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
