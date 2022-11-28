from dataclasses import dataclass, field
from enum import Enum

class FastSnapshotRestoreStateCodeEnum(str, Enum):
    ENABLING = "enabling"
    OPTIMIZING = "optimizing"
    ENABLED = "enabled"
    DISABLING = "disabling"
    DISABLED = "disabled"

