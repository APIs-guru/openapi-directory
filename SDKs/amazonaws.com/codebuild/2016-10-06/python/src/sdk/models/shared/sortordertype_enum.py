from dataclasses import dataclass, field
from typing import Enum

class SortOrderTypeEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

