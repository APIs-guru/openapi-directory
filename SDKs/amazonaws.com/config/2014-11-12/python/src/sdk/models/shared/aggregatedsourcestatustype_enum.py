from dataclasses import dataclass, field
from typing import Enum

class AggregatedSourceStatusTypeEnum(str, Enum):
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    OUTDATED = "OUTDATED"

