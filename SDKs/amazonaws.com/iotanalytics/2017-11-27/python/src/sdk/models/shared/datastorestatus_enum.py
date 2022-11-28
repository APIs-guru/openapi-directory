from dataclasses import dataclass, field
from enum import Enum

class DatastoreStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

