from dataclasses import dataclass, field
from enum import Enum

class RegistryStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    DELETING = "DELETING"

