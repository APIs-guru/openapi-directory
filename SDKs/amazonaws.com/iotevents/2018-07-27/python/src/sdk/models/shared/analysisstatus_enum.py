from dataclasses import dataclass, field
from enum import Enum

class AnalysisStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    COMPLETE = "COMPLETE"
    FAILED = "FAILED"

