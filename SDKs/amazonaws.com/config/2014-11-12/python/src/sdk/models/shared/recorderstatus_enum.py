from dataclasses import dataclass, field
from typing import Enum

class RecorderStatusEnum(str, Enum):
    PENDING = "Pending"
    SUCCESS = "Success"
    FAILURE = "Failure"

