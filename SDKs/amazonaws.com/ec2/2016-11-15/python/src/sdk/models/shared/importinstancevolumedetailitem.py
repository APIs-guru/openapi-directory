from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ImportInstanceVolumeDetailItem:
    r"""ImportInstanceVolumeDetailItem
    Describes an import volume task.
    """
    
    availability_zone: Optional[str] = field(default=None)
    bytes_converted: Optional[int] = field(default=None)
    description: Optional[str] = field(default=None)
    image: Optional[DiskImageDescription] = field(default=None)
    status: Optional[str] = field(default=None)
    status_message: Optional[str] = field(default=None)
    volume: Optional[DiskImageVolumeDescription] = field(default=None)
    
