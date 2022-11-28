from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddRegionRequest:
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    region_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    vpc_settings: DirectoryVpcSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VPCSettings') }})
    
