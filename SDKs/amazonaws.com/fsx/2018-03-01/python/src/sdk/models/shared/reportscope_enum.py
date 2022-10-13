from dataclasses import dataclass, field
from typing import Enum

class ReportScopeEnum(str, Enum):
    FAILED_FILES_ONLY = "FAILED_FILES_ONLY"

