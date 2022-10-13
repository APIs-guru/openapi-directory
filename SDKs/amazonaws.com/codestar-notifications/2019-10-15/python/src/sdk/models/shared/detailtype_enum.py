from dataclasses import dataclass, field
from typing import Enum

class DetailTypeEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"

