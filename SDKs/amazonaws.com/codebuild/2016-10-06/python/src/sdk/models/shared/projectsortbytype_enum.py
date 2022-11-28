from dataclasses import dataclass, field
from enum import Enum

class ProjectSortByTypeEnum(str, Enum):
    NAME = "NAME"
    CREATED_TIME = "CREATED_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"

