from dataclasses import dataclass, field
from typing import Enum

class SnapshotTypeEnum(str, Enum):
    AUTO = "Auto"
    MANUAL = "Manual"

