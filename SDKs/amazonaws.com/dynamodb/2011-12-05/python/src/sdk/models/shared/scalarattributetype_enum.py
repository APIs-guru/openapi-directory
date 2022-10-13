from dataclasses import dataclass, field
from typing import Enum

class ScalarAttributeTypeEnum(str, Enum):
    S = "S"
    N = "N"
    B = "B"

