from dataclasses import dataclass, field
from enum import Enum

class ConfigStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"

