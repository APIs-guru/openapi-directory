from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceFleetModifyConfig:
    r"""InstanceFleetModifyConfig
    <p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
    """
    
    instance_fleet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceFleetId') }})
    target_on_demand_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetOnDemandCapacity') }})
    target_spot_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetSpotCapacity') }})
    
