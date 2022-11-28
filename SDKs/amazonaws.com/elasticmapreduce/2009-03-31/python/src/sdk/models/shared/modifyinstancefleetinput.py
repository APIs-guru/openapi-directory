from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyInstanceFleetInput:
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    instance_fleet: InstanceFleetModifyConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceFleet') }})
    
