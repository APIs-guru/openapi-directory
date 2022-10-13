from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import spend
from . import spend
from . import timeperiod


@dataclass_json
@dataclass
class BudgetedAndActualAmounts:
    actual_amount: Optional[spend.Spend] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualAmount' }})
    budgeted_amount: Optional[spend.Spend] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetedAmount' }})
    time_period: Optional[timeperiod.TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimePeriod' }})
    
