from dataclasses import dataclass, field
from typing import Enum

class GidEnum(str, Enum):
    NONE = "NONE"
    INT_VALUE = "INT_VALUE"
    NAME = "NAME"
    BOTH = "BOTH"

