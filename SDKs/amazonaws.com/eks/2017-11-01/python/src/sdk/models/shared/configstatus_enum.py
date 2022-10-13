from dataclasses import dataclass, field
from typing import Enum

class ConfigStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"

