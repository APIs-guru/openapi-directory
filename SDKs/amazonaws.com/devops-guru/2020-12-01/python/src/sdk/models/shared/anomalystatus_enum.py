from dataclasses import dataclass, field
from typing import Enum

class AnomalyStatusEnum(str, Enum):
    ONGOING = "ONGOING"
    CLOSED = "CLOSED"

