from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ebsblockdeviceconfig


@dataclass_json
@dataclass
class EbsConfiguration:
    ebs_block_device_configs: Optional[List[ebsblockdeviceconfig.EbsBlockDeviceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsBlockDeviceConfigs' }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsOptimized' }})
    
