from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeFleetLocationUtilizationOutput:
    r"""DescribeFleetLocationUtilizationOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_utilization: Optional[FleetUtilization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetUtilization') }})
    
