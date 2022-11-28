from dataclasses import dataclass, field
from enum import Enum

class ReportTypeEnum(str, Enum):
    FINDING = "FINDING"
    FULL = "FULL"

