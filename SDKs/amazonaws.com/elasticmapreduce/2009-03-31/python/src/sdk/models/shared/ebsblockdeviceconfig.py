from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EbsBlockDeviceConfig:
    r"""EbsBlockDeviceConfig
    Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance.
    """
    
    volume_specification: VolumeSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeSpecification') }})
    volumes_per_instance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumesPerInstance') }})
    
