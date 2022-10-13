from dataclasses import dataclass, field
from typing import Enum

class CapacityProviderStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

