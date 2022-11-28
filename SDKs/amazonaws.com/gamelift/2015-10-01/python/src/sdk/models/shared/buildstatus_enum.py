from dataclasses import dataclass, field
from enum import Enum

class BuildStatusEnum(str, Enum):
    INITIALIZED = "INITIALIZED"
    READY = "READY"
    FAILED = "FAILED"

