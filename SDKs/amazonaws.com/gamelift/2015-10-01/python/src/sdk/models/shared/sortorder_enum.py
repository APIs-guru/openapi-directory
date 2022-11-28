from dataclasses import dataclass, field
from enum import Enum

class SortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

