from dataclasses import dataclass, field
from typing import Enum

class InsightStatusEnum(str, Enum):
    ONGOING = "ONGOING"
    CLOSED = "CLOSED"

