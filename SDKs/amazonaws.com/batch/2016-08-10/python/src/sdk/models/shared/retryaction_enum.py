from dataclasses import dataclass, field
from typing import Enum

class RetryActionEnum(str, Enum):
    RETRY = "RETRY"
    EXIT = "EXIT"

