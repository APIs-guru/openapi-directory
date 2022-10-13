from dataclasses import dataclass, field
from typing import Enum

class OrderEnumEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"

