from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timeperiod


@dataclass_json
@dataclass
class DescribeBudgetPerformanceHistoryRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    time_period: Optional[timeperiod.TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimePeriod' }})
    
