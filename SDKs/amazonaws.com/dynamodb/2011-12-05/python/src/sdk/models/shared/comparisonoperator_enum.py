from dataclasses import dataclass, field
from enum import Enum

class ComparisonOperatorEnum(str, Enum):
    EQ = "EQ"
    NE = "NE"
    IN = "IN"
    LE = "LE"
    LT = "LT"
    GE = "GE"
    GT = "GT"
    BETWEEN = "BETWEEN"
    NOT_NULL = "NOT_NULL"
    NULL = "NULL"
    CONTAINS = "CONTAINS"
    NOT_CONTAINS = "NOT_CONTAINS"
    BEGINS_WITH = "BEGINS_WITH"

