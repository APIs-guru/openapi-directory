from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EbsConfiguration:
    r"""EbsConfiguration
    The Amazon EBS configuration of a cluster instance.
    """
    
    ebs_block_device_configs: Optional[List[EbsBlockDeviceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsBlockDeviceConfigs') }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsOptimized') }})
    
