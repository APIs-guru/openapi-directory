from dataclasses import dataclass, field
from typing import Enum

class IndexStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    BUILDING = "BUILDING"
    REBUILDING = "REBUILDING"

