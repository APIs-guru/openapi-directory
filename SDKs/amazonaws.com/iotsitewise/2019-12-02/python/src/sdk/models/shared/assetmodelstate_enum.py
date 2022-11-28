from dataclasses import dataclass, field
from enum import Enum

class AssetModelStateEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    PROPAGATING = "PROPAGATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

