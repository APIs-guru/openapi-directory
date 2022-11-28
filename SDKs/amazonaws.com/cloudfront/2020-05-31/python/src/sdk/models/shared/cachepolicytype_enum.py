from dataclasses import dataclass, field
from enum import Enum

class CachePolicyTypeEnum(str, Enum):
    MANAGED = "managed"
    CUSTOM = "custom"

