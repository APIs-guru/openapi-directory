from dataclasses import dataclass, field
from enum import Enum

class TableStatusEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"

