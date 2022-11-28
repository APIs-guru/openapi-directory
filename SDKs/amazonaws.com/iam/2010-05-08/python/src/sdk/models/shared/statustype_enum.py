from dataclasses import dataclass, field
from enum import Enum

class StatusTypeEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

