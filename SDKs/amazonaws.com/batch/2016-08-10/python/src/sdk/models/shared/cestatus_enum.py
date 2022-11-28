from dataclasses import dataclass, field
from enum import Enum

class CeStatusEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DELETED = "DELETED"
    VALID = "VALID"
    INVALID = "INVALID"

