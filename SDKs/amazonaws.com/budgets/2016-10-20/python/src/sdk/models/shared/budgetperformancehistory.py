from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BudgetPerformanceHistory:
    r"""BudgetPerformanceHistory
    A history of the state of a budget at the end of the budget's specified time period.
    """
    
    budget_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    budget_type: Optional[BudgetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetType') }})
    budgeted_and_actual_amounts_list: Optional[List[BudgetedAndActualAmounts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetedAndActualAmountsList') }})
    cost_filters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CostFilters') }})
    cost_types: Optional[CostTypes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CostTypes') }})
    time_unit: Optional[TimeUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeUnit') }})
    
