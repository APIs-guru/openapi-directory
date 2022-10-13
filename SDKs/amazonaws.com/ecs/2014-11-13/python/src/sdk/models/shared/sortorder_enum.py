from dataclasses import dataclass, field
from typing import Enum

class SortOrderEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

