from dataclasses import dataclass, field
from enum import Enum

class TestGridSessionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CLOSED = "CLOSED"
    ERRORED = "ERRORED"

