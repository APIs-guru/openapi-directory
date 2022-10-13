from dataclasses import dataclass, field
from typing import Enum

class ReportGroupStatusTypeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

