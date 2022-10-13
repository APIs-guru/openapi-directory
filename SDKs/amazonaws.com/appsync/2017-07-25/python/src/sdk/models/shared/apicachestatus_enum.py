from dataclasses import dataclass, field
from typing import Enum

class APICacheStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    MODIFYING = "MODIFYING"
    FAILED = "FAILED"

