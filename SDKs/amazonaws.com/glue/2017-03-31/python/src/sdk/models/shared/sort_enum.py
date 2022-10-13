from dataclasses import dataclass, field
from typing import Enum

class SortEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

