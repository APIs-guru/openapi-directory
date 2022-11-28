from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddInstanceFleetInput:
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    instance_fleet: InstanceFleetConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceFleet') }})
    
