from dataclasses import dataclass, field
from enum import Enum

class AnalysisStatusEnum(str, Enum):
    RUNNING = "running"
    SUCCEEDED = "succeeded"
    FAILED = "failed"

