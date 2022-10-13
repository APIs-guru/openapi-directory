from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import budgettype_enum
from . import budgetedandactualamounts
from . import costtypes
from . import timeunit_enum


@dataclass_json
@dataclass
class BudgetPerformanceHistory:
    budget_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    budget_type: Optional[budgettype_enum.BudgetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetType' }})
    budgeted_and_actual_amounts_list: Optional[List[budgetedandactualamounts.BudgetedAndActualAmounts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetedAndActualAmountsList' }})
    cost_filters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CostFilters' }})
    cost_types: Optional[costtypes.CostTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CostTypes' }})
    time_unit: Optional[timeunit_enum.TimeUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeUnit' }})
    
