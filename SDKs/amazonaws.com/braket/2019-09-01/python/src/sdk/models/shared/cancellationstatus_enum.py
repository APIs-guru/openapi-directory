from dataclasses import dataclass, field
from enum import Enum

class CancellationStatusEnum(str, Enum):
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"

