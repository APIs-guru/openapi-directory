from dataclasses import dataclass, field
from enum import Enum

class ReportStateTypeEnum(str, Enum):
    STARTED = "STARTED"
    INPROGRESS = "INPROGRESS"
    COMPLETE = "COMPLETE"

