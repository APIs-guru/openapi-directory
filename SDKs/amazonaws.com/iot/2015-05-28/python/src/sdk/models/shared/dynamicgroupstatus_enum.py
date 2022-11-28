from dataclasses import dataclass, field
from enum import Enum

class DynamicGroupStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    BUILDING = "BUILDING"
    REBUILDING = "REBUILDING"

