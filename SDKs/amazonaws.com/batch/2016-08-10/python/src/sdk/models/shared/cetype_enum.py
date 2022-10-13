from dataclasses import dataclass, field
from typing import Enum

class CeTypeEnum(str, Enum):
    MANAGED = "MANAGED"
    UNMANAGED = "UNMANAGED"

