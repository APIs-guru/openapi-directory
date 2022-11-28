from dataclasses import dataclass, field
from enum import Enum

class ScalarAttributeTypeEnum(str, Enum):
    S = "S"
    N = "N"
    B = "B"

