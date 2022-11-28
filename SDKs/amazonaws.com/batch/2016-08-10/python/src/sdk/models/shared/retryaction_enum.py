from dataclasses import dataclass, field
from enum import Enum

class RetryActionEnum(str, Enum):
    RETRY = "RETRY"
    EXIT = "EXIT"

