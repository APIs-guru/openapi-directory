from dataclasses import dataclass, field
from typing import Enum

class AutoRegistrationStatusEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

