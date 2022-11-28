from dataclasses import dataclass, field
from enum import Enum

class LastCrawlStatusEnum(str, Enum):
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"

