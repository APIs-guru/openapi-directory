from dataclasses import dataclass, field
from typing import Enum

class AnalysisStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    COMPLETE = "COMPLETE"
    FAILED = "FAILED"

