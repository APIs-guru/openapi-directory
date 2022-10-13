from dataclasses import dataclass, field
from typing import Enum

class CloudComponentStateEnum(str, Enum):
    REQUESTED = "REQUESTED"
    INITIATED = "INITIATED"
    DEPLOYABLE = "DEPLOYABLE"
    FAILED = "FAILED"
    DEPRECATED = "DEPRECATED"

