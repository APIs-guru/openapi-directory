from dataclasses import dataclass, field
from typing import Enum

class LastCrawlStatusEnum(str, Enum):
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"

