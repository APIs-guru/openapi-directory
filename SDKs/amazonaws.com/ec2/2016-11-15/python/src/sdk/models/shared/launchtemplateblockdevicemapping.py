from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class LaunchTemplateBlockDeviceMapping:
    r"""LaunchTemplateBlockDeviceMapping
    Describes a block device mapping.
    """
    
    device_name: Optional[str] = field(default=None)
    ebs: Optional[LaunchTemplateEbsBlockDevice] = field(default=None)
    no_device: Optional[str] = field(default=None)
    virtual_name: Optional[str] = field(default=None)
    
