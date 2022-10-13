from dataclasses import dataclass, field
from typing import Enum

class PhaseStatusEnum(str, Enum):
    PENDING = "PENDING"
    SUCCESS = "SUCCESS"
    ERROR = "ERROR"

