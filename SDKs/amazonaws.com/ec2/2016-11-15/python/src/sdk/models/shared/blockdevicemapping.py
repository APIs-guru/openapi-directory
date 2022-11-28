from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class BlockDeviceMapping:
    r"""BlockDeviceMapping
    Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
    """
    
    device_name: Optional[str] = field(default=None)
    ebs: Optional[EbsBlockDevice] = field(default=None)
    no_device: Optional[str] = field(default=None)
    virtual_name: Optional[str] = field(default=None)
    
