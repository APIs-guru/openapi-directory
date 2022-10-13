from dataclasses import dataclass, field
from typing import Enum

class BlueprintStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    FAILED = "FAILED"

