from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DiskImageDescription:
    r"""DiskImageDescription
    Describes a disk image.
    """
    
    checksum: Optional[str] = field(default=None)
    format: Optional[DiskImageFormatEnum] = field(default=None)
    import_manifest_url: Optional[str] = field(default=None)
    size: Optional[int] = field(default=None)
    
