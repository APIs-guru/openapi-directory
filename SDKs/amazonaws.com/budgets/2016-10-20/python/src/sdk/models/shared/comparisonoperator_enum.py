from dataclasses import dataclass, field
from enum import Enum

class ComparisonOperatorEnum(str, Enum):
    GREATER_THAN = "GREATER_THAN"
    LESS_THAN = "LESS_THAN"
    EQUAL_TO = "EQUAL_TO"

