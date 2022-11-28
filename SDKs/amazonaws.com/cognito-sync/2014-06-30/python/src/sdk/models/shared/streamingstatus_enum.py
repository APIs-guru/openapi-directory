from dataclasses import dataclass, field
from enum import Enum

class StreamingStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

