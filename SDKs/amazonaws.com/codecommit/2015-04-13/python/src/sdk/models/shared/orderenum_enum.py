from dataclasses import dataclass, field
from enum import Enum

class OrderEnumEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"

