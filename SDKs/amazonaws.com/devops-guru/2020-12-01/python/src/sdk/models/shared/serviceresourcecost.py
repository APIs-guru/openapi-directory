from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import costestimationserviceresourcestate_enum


@dataclass_json
@dataclass
class ServiceResourceCost:
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cost' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    state: Optional[costestimationserviceresourcestate_enum.CostEstimationServiceResourceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    unit_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnitCost' }})
    
