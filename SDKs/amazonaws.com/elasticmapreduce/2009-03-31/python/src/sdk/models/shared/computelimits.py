from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import computelimitsunittype_enum


@dataclass_json
@dataclass
class ComputeLimits:
    maximum_capacity_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumCapacityUnits' }})
    maximum_core_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumCoreCapacityUnits' }})
    maximum_on_demand_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumOnDemandCapacityUnits' }})
    minimum_capacity_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumCapacityUnits' }})
    unit_type: computelimitsunittype_enum.ComputeLimitsUnitTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnitType' }})
    
