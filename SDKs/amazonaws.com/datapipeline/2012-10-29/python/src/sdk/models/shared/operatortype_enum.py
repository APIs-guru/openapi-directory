from dataclasses import dataclass, field
from typing import Enum

class OperatorTypeEnum(str, Enum):
    EQ = "EQ"
    REF_EQ = "REF_EQ"
    LE = "LE"
    GE = "GE"
    BETWEEN = "BETWEEN"

