from dataclasses import dataclass, field
from enum import Enum

class AdjustmentTypeEnum(str, Enum):
    CHANGE_IN_CAPACITY = "CHANGE_IN_CAPACITY"
    PERCENT_CHANGE_IN_CAPACITY = "PERCENT_CHANGE_IN_CAPACITY"
    EXACT_CAPACITY = "EXACT_CAPACITY"

