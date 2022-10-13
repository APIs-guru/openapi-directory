from dataclasses import dataclass, field
from typing import Enum

class SharedResourceSortByTypeEnum(str, Enum):
    ARN = "ARN"
    MODIFIED_TIME = "MODIFIED_TIME"

