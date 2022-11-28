from dataclasses import dataclass, field
from enum import Enum

class ReportScopeEnum(str, Enum):
    FAILED_FILES_ONLY = "FAILED_FILES_ONLY"

