from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EnableFastSnapshotRestoreStateError:
    r"""EnableFastSnapshotRestoreStateError
    Describes an error that occurred when enabling fast snapshot restores.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
