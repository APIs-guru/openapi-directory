from dataclasses import dataclass, field
from enum import Enum

class RecorderStatusEnum(str, Enum):
    PENDING = "Pending"
    SUCCESS = "Success"
    FAILURE = "Failure"

