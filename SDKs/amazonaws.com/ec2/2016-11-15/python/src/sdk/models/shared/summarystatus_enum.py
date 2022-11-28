from dataclasses import dataclass, field
from enum import Enum

class SummaryStatusEnum(str, Enum):
    OK = "ok"
    IMPAIRED = "impaired"
    INSUFFICIENT_DATA = "insufficient-data"
    NOT_APPLICABLE = "not-applicable"
    INITIALIZING = "initializing"

