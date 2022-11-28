from dataclasses import dataclass, field
from enum import Enum

class RelativeFileVersionEnumEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"

