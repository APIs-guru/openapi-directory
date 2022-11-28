from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DisableFastSnapshotRestoreStateError:
    r"""DisableFastSnapshotRestoreStateError
    Describes an error that occurred when disabling fast snapshot restores.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
