from dataclasses import dataclass, field
from typing import Enum

class CeStatusEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DELETED = "DELETED"
    VALID = "VALID"
    INVALID = "INVALID"

