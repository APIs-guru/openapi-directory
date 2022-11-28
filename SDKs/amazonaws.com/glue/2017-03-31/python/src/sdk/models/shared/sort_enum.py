from dataclasses import dataclass, field
from enum import Enum

class SortEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

