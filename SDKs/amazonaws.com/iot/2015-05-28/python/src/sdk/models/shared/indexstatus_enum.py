from dataclasses import dataclass, field
from enum import Enum

class IndexStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    BUILDING = "BUILDING"
    REBUILDING = "REBUILDING"

