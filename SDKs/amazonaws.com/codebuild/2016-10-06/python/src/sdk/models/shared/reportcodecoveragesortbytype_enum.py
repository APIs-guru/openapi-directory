from dataclasses import dataclass, field
from typing import Enum

class ReportCodeCoverageSortByTypeEnum(str, Enum):
    LINE_COVERAGE_PERCENTAGE = "LINE_COVERAGE_PERCENTAGE"
    FILE_PATH = "FILE_PATH"

