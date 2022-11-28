from dataclasses import dataclass, field
from enum import Enum

class CeTypeEnum(str, Enum):
    MANAGED = "MANAGED"
    UNMANAGED = "UNMANAGED"

