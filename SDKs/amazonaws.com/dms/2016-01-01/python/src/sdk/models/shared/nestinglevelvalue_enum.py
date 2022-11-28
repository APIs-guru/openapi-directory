from dataclasses import dataclass, field
from enum import Enum

class NestingLevelValueEnum(str, Enum):
    NONE = "none"
    ONE = "one"

