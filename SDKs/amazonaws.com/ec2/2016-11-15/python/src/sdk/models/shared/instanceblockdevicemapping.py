from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class InstanceBlockDeviceMapping:
    r"""InstanceBlockDeviceMapping
    Describes a block device mapping.
    """
    
    device_name: Optional[str] = field(default=None)
    ebs: Optional[EbsInstanceBlockDevice] = field(default=None)
    
