from dataclasses import dataclass, field
from enum import Enum

class DimensionValueOperatorEnum(str, Enum):
    IN = "IN"
    NOT_IN = "NOT_IN"

