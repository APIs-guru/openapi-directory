from dataclasses import dataclass, field
from typing import Enum

class DatastoreStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

