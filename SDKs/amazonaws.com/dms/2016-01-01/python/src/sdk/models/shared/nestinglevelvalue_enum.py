from dataclasses import dataclass, field
from typing import Enum

class NestingLevelValueEnum(str, Enum):
    NONE = "none"
    ONE = "one"

