from dataclasses import dataclass, field
from enum import Enum

class InsightStatusEnum(str, Enum):
    ONGOING = "ONGOING"
    CLOSED = "CLOSED"

