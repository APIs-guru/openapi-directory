from dataclasses import dataclass, field
from enum import Enum

class KeyTypeEnum(str, Enum):
    HASH = "HASH"
    RANGE = "RANGE"

