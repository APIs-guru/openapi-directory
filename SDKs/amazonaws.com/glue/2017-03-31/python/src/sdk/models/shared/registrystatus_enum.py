from dataclasses import dataclass, field
from typing import Enum

class RegistryStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    DELETING = "DELETING"

