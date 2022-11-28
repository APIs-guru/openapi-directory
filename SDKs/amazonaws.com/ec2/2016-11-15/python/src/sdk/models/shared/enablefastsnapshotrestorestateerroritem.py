from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class EnableFastSnapshotRestoreStateErrorItem:
    r"""EnableFastSnapshotRestoreStateErrorItem
    Contains information about an error that occurred when enabling fast snapshot restores.
    """
    
    availability_zone: Optional[str] = field(default=None)
    error: Optional[EnableFastSnapshotRestoreStateError] = field(default=None)
    
