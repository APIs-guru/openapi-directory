from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DisableFastSnapshotRestoreErrorItem:
    r"""DisableFastSnapshotRestoreErrorItem
    Contains information about the errors that occurred when disabling fast snapshot restores.
    """
    
    fast_snapshot_restore_state_errors: Optional[List[DisableFastSnapshotRestoreStateErrorItem]] = field(default=None)
    snapshot_id: Optional[str] = field(default=None)
    
