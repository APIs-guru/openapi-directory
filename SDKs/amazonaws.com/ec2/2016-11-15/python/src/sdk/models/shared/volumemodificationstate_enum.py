from dataclasses import dataclass, field
from enum import Enum

class VolumeModificationStateEnum(str, Enum):
    MODIFYING = "modifying"
    OPTIMIZING = "optimizing"
    COMPLETED = "completed"
    FAILED = "failed"

