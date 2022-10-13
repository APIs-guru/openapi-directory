from dataclasses import dataclass, field
from typing import Enum

class DimensionValueOperatorEnum(str, Enum):
    IN = "IN"
    NOT_IN = "NOT_IN"

