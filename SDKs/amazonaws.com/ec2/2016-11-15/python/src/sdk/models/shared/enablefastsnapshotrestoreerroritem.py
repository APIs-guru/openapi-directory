from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EnableFastSnapshotRestoreErrorItem:
    r"""EnableFastSnapshotRestoreErrorItem
    Contains information about the errors that occurred when enabling fast snapshot restores.
    """
    
    fast_snapshot_restore_state_errors: Optional[List[EnableFastSnapshotRestoreStateErrorItem]] = field(default=None)
    snapshot_id: Optional[str] = field(default=None)
    
