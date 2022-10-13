from dataclasses import dataclass, field
from typing import Enum

class ReportGroupTrendFieldTypeEnum(str, Enum):
    PASS_RATE = "PASS_RATE"
    DURATION = "DURATION"
    TOTAL = "TOTAL"
    LINE_COVERAGE = "LINE_COVERAGE"
    LINES_COVERED = "LINES_COVERED"
    LINES_MISSED = "LINES_MISSED"
    BRANCH_COVERAGE = "BRANCH_COVERAGE"
    BRANCHES_COVERED = "BRANCHES_COVERED"
    BRANCHES_MISSED = "BRANCHES_MISSED"

