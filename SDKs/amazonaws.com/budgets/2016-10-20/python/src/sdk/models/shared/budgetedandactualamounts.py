from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BudgetedAndActualAmounts:
    r"""BudgetedAndActualAmounts
    The amount of cost or usage that you created the budget for, compared to your actual costs or usage.
    """
    
    actual_amount: Optional[Spend] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActualAmount') }})
    budgeted_amount: Optional[Spend] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetedAmount') }})
    time_period: Optional[TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimePeriod') }})
    
