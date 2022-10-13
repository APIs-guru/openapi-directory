from dataclasses import dataclass, field
from typing import Enum

class KeyTypeEnum(str, Enum):
    HASH = "HASH"
    RANGE = "RANGE"

