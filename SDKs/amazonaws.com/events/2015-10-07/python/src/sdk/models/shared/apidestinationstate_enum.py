from dataclasses import dataclass, field
from enum import Enum

class APIDestinationStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

