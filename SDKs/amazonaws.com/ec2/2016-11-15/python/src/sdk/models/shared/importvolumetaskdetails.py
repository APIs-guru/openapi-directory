from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ImportVolumeTaskDetails:
    r"""ImportVolumeTaskDetails
    Describes an import volume task.
    """
    
    availability_zone: Optional[str] = field(default=None)
    bytes_converted: Optional[int] = field(default=None)
    description: Optional[str] = field(default=None)
    image: Optional[DiskImageDescription] = field(default=None)
    volume: Optional[DiskImageVolumeDescription] = field(default=None)
    
