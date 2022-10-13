from dataclasses import dataclass, field
from typing import Enum

class AutoImportPolicyTypeEnum(str, Enum):
    NONE = "NONE"
    NEW = "NEW"
    NEW_CHANGED = "NEW_CHANGED"

