from dataclasses import dataclass, field
from typing import Enum

class SortDirectionTypeEnum(str, Enum):
    DESCENDING = "DESCENDING"
    ASCENDING = "ASCENDING"

