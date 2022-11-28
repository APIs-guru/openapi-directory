from dataclasses import dataclass, field
from enum import Enum

class InputStatusEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

