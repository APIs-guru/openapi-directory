from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Budget:
    r"""Budget
    <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>
    """
    
    budget_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    budget_type: BudgetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetType') }})
    time_unit: TimeUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeUnit') }})
    budget_limit: Optional[Spend] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetLimit') }})
    calculated_spend: Optional[CalculatedSpend] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculatedSpend') }})
    cost_filters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CostFilters') }})
    cost_types: Optional[CostTypes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CostTypes') }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    planned_budget_limits: Optional[dict[str, Spend]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlannedBudgetLimits') }})
    time_period: Optional[TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimePeriod') }})
    
