from dataclasses import dataclass, field
from enum import Enum

class ReportStatusTypeEnum(str, Enum):
    GENERATING = "GENERATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    INCOMPLETE = "INCOMPLETE"
    DELETING = "DELETING"

