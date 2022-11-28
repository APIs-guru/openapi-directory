from dataclasses import dataclass, field
from enum import Enum

class FindingChangeTypeEnum(str, Enum):
    CHANGED = "CHANGED"
    NEW = "NEW"
    UNCHANGED = "UNCHANGED"

