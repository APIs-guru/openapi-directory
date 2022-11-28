from dataclasses import dataclass, field
from enum import Enum

class RuleOperatorEnum(str, Enum):
    EQUALS = "EQUALS"
    LESS_THAN = "LESS_THAN"
    LESS_THAN_OR_EQUALS = "LESS_THAN_OR_EQUALS"
    GREATER_THAN = "GREATER_THAN"
    GREATER_THAN_OR_EQUALS = "GREATER_THAN_OR_EQUALS"
    IN = "IN"
    NOT_IN = "NOT_IN"
    CONTAINS = "CONTAINS"

