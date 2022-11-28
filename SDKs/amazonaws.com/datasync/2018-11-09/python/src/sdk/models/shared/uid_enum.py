from dataclasses import dataclass, field
from enum import Enum

class UIDEnum(str, Enum):
    NONE = "NONE"
    INT_VALUE = "INT_VALUE"
    NAME = "NAME"
    BOTH = "BOTH"

