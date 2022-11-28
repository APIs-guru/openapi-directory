from dataclasses import dataclass, field
from enum import Enum

class PhaseStatusEnum(str, Enum):
    PENDING = "PENDING"
    SUCCESS = "SUCCESS"
    ERROR = "ERROR"

