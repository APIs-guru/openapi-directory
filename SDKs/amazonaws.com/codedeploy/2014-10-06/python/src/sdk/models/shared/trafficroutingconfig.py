from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timebasedcanary
from . import timebasedlinear
from . import trafficroutingtype_enum


@dataclass_json
@dataclass
class TrafficRoutingConfig:
    time_based_canary: Optional[timebasedcanary.TimeBasedCanary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeBasedCanary' }})
    time_based_linear: Optional[timebasedlinear.TimeBasedLinear] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeBasedLinear' }})
    type: Optional[trafficroutingtype_enum.TrafficRoutingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
