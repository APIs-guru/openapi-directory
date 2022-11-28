from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeFleetCapacityOutput:
    r"""DescribeFleetCapacityOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_capacity: Optional[List[FleetCapacity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetCapacity') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
