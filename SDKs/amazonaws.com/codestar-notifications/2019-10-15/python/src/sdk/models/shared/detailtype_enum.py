from dataclasses import dataclass, field
from enum import Enum

class DetailTypeEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"

