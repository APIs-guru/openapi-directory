from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class BlockDeviceMapping:
    r"""BlockDeviceMapping
    Describes a block device mapping.
    """
    
    device_name: str = field()
    ebs: Optional[Ebs] = field(default=None)
    no_device: Optional[bool] = field(default=None)
    virtual_name: Optional[str] = field(default=None)
    
