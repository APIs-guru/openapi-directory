from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceBlockDeviceMapping:
    r"""InstanceBlockDeviceMapping
    Defines block device mappings for the instance used to configure your image.
    """
    
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    ebs: Optional[EbsInstanceBlockDeviceSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebs') }})
    no_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noDevice') }})
    virtual_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualName') }})
    
