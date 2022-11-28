from dataclasses import dataclass, field
from enum import Enum

class ReportTypeEnum(str, Enum):
    TEST = "TEST"
    CODE_COVERAGE = "CODE_COVERAGE"

