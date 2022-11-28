from dataclasses import dataclass, field
from enum import Enum

class AssetStateEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

