from dataclasses import dataclass, field
from typing import Enum

class ReportTypeEnum(str, Enum):
    ERRORS = "ERRORS"
    RESULTS = "RESULTS"

