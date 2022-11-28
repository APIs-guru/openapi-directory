from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeLimits:
    r"""ComputeLimits
     The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
    """
    
    maximum_capacity_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumCapacityUnits') }})
    minimum_capacity_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumCapacityUnits') }})
    unit_type: ComputeLimitsUnitTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnitType') }})
    maximum_core_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumCoreCapacityUnits') }})
    maximum_on_demand_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumOnDemandCapacityUnits') }})
    
