from dataclasses import dataclass, field
from typing import Enum

class StreamingStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

