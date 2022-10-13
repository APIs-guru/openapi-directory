from dataclasses import dataclass, field
from typing import Enum

class OperatorEnum(str, Enum):
    EQUALS = "Equals"
    NOT_EQUALS = "NotEquals"
    IN = "In"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    LESS_THAN = "LessThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"
    GREATER_THAN = "GreaterThan"
    CONTAINS = "Contains"
    NOT_CONTAINS = "NotContains"
    BEGINS_WITH = "BeginsWith"

