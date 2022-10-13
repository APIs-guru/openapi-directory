from dataclasses import dataclass, field
from typing import Enum

class FilterConditionStringEnum(str, Enum):
    IS = "IS"
    IS_NOT = "IS_NOT"

