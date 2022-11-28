from dataclasses import dataclass, field
from enum import Enum

class BlueprintStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    FAILED = "FAILED"

