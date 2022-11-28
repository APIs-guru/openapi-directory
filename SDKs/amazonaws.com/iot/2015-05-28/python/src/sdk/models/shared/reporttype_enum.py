from dataclasses import dataclass, field
from enum import Enum

class ReportTypeEnum(str, Enum):
    ERRORS = "ERRORS"
    RESULTS = "RESULTS"

