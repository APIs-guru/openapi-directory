from dataclasses import dataclass, field
from enum import Enum

class AutoImportPolicyTypeEnum(str, Enum):
    NONE = "NONE"
    NEW = "NEW"
    NEW_CHANGED = "NEW_CHANGED"

