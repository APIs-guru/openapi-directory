from dataclasses import dataclass, field
from typing import Enum

class ExecutionResultEnum(str, Enum):
    PENDING = "PENDING"
    PASSED = "PASSED"
    WARNED = "WARNED"
    FAILED = "FAILED"
    SKIPPED = "SKIPPED"
    ERRORED = "ERRORED"
    STOPPED = "STOPPED"

