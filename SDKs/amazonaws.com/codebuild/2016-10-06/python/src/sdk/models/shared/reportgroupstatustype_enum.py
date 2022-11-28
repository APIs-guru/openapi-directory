from dataclasses import dataclass, field
from enum import Enum

class ReportGroupStatusTypeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

