from dataclasses import dataclass, field
from enum import Enum

class IndexStatusEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"

