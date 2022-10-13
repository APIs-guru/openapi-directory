from dataclasses import dataclass, field
from typing import Enum

class ReportTypeEnum(str, Enum):
    FINDING = "FINDING"
    FULL = "FULL"

