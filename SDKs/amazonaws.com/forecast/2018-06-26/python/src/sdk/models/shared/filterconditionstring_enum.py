from dataclasses import dataclass, field
from enum import Enum

class FilterConditionStringEnum(str, Enum):
    IS = "IS"
    IS_NOT = "IS_NOT"

