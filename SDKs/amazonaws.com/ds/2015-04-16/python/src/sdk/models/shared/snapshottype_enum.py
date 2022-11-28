from dataclasses import dataclass, field
from enum import Enum

class SnapshotTypeEnum(str, Enum):
    AUTO = "Auto"
    MANUAL = "Manual"

