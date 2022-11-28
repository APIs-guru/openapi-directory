from dataclasses import dataclass, field
from enum import Enum

class RuleTypeEnum(str, Enum):
    BINARY_LENGTH = "BINARY_LENGTH"
    NUMBER_COMPARISON = "NUMBER_COMPARISON"
    STRING_FROM_SET = "STRING_FROM_SET"
    STRING_LENGTH = "STRING_LENGTH"

