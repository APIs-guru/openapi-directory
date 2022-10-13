from dataclasses import dataclass, field
from typing import Enum

class BuildStatusEnum(str, Enum):
    INITIALIZED = "INITIALIZED"
    READY = "READY"
    FAILED = "FAILED"

