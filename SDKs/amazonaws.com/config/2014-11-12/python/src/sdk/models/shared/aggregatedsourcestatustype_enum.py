from dataclasses import dataclass, field
from enum import Enum

class AggregatedSourceStatusTypeEnum(str, Enum):
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    OUTDATED = "OUTDATED"

