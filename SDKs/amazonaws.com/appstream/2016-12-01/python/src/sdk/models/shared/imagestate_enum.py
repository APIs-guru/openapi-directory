from dataclasses import dataclass, field
from typing import Enum

class ImageStateEnum(str, Enum):
    PENDING = "PENDING"
    AVAILABLE = "AVAILABLE"
    FAILED = "FAILED"
    COPYING = "COPYING"
    DELETING = "DELETING"
    CREATING = "CREATING"
    IMPORTING = "IMPORTING"

