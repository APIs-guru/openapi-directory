from dataclasses import dataclass, field
from typing import Enum

class GlobalTableStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

