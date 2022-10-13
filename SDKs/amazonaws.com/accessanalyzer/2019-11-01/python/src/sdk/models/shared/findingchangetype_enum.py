from dataclasses import dataclass, field
from typing import Enum

class FindingChangeTypeEnum(str, Enum):
    CHANGED = "CHANGED"
    NEW = "NEW"
    UNCHANGED = "UNCHANGED"

