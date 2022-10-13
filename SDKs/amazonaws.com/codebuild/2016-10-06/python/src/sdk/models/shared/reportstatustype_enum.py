from dataclasses import dataclass, field
from typing import Enum

class ReportStatusTypeEnum(str, Enum):
    GENERATING = "GENERATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    INCOMPLETE = "INCOMPLETE"
    DELETING = "DELETING"

