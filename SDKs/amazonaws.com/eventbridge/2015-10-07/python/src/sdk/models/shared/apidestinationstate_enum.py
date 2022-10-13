from dataclasses import dataclass, field
from typing import Enum

class APIDestinationStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

