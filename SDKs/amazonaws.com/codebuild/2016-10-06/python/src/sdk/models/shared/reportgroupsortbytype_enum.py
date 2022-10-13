from dataclasses import dataclass, field
from typing import Enum

class ReportGroupSortByTypeEnum(str, Enum):
    NAME = "NAME"
    CREATED_TIME = "CREATED_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"

