from dataclasses import dataclass, field
from typing import Enum

class ReportTypeEnum(str, Enum):
    TEST = "TEST"
    CODE_COVERAGE = "CODE_COVERAGE"

