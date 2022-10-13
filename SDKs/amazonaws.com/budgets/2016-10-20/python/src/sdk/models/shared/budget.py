from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import spend
from . import budgettype_enum
from . import calculatedspend
from . import costtypes
from . import spend
from . import timeperiod
from . import timeunit_enum


@dataclass_json
@dataclass
class Budget:
    budget_limit: Optional[spend.Spend] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetLimit' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    budget_type: budgettype_enum.BudgetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetType' }})
    calculated_spend: Optional[calculatedspend.CalculatedSpend] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculatedSpend' }})
    cost_filters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CostFilters' }})
    cost_types: Optional[costtypes.CostTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CostTypes' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    planned_budget_limits: Optional[dict[str, spend.Spend]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlannedBudgetLimits' }})
    time_period: Optional[timeperiod.TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimePeriod' }})
    time_unit: timeunit_enum.TimeUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeUnit' }})
    
