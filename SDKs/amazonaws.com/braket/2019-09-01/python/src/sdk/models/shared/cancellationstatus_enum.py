from dataclasses import dataclass, field
from typing import Enum

class CancellationStatusEnum(str, Enum):
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"

