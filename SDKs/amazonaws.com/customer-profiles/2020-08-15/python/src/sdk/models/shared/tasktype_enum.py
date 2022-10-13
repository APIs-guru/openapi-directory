from dataclasses import dataclass, field
from typing import Enum

class TaskTypeEnum(str, Enum):
    ARITHMETIC = "Arithmetic"
    FILTER = "Filter"
    MAP = "Map"
    MASK = "Mask"
    MERGE = "Merge"
    TRUNCATE = "Truncate"
    VALIDATE = "Validate"

