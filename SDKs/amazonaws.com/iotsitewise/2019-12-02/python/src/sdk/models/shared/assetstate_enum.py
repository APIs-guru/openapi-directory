from dataclasses import dataclass, field
from typing import Enum

class AssetStateEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

