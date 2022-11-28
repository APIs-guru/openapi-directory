from dataclasses import dataclass, field
from enum import Enum

class APICacheStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    MODIFYING = "MODIFYING"
    FAILED = "FAILED"

