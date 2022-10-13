from dataclasses import dataclass, field
from typing import Enum

class SuiteRunStatusEnum(str, Enum):
    PASS = "PASS"
    FAIL = "FAIL"
    CANCELED = "CANCELED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    PASS_WITH_WARNINGS = "PASS_WITH_WARNINGS"
    ERROR = "ERROR"

