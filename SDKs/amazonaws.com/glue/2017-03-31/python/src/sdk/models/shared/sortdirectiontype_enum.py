from dataclasses import dataclass, field
from enum import Enum

class SortDirectionTypeEnum(str, Enum):
    DESCENDING = "DESCENDING"
    ASCENDING = "ASCENDING"

