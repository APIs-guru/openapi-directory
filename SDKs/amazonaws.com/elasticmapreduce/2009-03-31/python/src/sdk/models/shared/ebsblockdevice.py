from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EbsBlockDevice:
    r"""EbsBlockDevice
    Configuration of requested EBS block device associated with the instance group.
    """
    
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Device') }})
    volume_specification: Optional[VolumeSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeSpecification') }})
    
