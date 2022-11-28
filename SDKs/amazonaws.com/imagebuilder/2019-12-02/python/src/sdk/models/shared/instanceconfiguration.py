from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceConfiguration:
    r"""InstanceConfiguration
    Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
    """
    
    block_device_mappings: Optional[List[InstanceBlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockDeviceMappings') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
