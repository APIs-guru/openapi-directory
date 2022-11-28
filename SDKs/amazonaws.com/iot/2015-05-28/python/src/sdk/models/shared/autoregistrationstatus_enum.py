from dataclasses import dataclass, field
from enum import Enum

class AutoRegistrationStatusEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

