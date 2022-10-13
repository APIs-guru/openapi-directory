from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ebsinstanceblockdevicespecification


@dataclass_json
@dataclass
class InstanceBlockDeviceMapping:
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    ebs: Optional[ebsinstanceblockdevicespecification.EbsInstanceBlockDeviceSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebs' }})
    no_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noDevice' }})
    virtual_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualName' }})
    
