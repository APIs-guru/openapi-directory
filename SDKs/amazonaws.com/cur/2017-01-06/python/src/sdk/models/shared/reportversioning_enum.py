from dataclasses import dataclass, field
from enum import Enum

class ReportVersioningEnum(str, Enum):
    CREATE_NEW_REPORT = "CREATE_NEW_REPORT"
    OVERWRITE_REPORT = "OVERWRITE_REPORT"

