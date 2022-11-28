from dataclasses import dataclass, field
from enum import Enum

class AwsJobAbortCriteriaFailureTypeEnum(str, Enum):
    FAILED = "FAILED"
    REJECTED = "REJECTED"
    TIMED_OUT = "TIMED_OUT"
    ALL = "ALL"

