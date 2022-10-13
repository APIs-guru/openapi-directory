from dataclasses import dataclass, field
from typing import Enum

class TestGridSessionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CLOSED = "CLOSED"
    ERRORED = "ERRORED"

