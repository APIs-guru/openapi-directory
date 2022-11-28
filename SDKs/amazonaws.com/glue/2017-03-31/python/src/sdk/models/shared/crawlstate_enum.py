from dataclasses import dataclass, field
from enum import Enum

class CrawlStateEnum(str, Enum):
    RUNNING = "RUNNING"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

