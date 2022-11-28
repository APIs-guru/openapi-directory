from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DiskImageVolumeDescription:
    r"""DiskImageVolumeDescription
    Describes a disk image volume.
    """
    
    id: Optional[str] = field(default=None)
    size: Optional[int] = field(default=None)
    
