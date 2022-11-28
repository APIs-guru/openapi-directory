from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DisableFastSnapshotRestoreStateErrorItem:
    r"""DisableFastSnapshotRestoreStateErrorItem
    Contains information about an error that occurred when disabling fast snapshot restores.
    """
    
    availability_zone: Optional[str] = field(default=None)
    error: Optional[DisableFastSnapshotRestoreStateError] = field(default=None)
    
