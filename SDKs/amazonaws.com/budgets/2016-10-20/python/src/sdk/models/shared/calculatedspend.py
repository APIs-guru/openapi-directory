from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import spend
from . import spend


@dataclass_json
@dataclass
class CalculatedSpend:
    actual_spend: spend.Spend = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualSpend' }})
    forecasted_spend: Optional[spend.Spend] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastedSpend' }})
    
