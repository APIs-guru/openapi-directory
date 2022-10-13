from dataclasses import dataclass, field
from typing import Enum

class DynamicGroupStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    BUILDING = "BUILDING"
    REBUILDING = "REBUILDING"

