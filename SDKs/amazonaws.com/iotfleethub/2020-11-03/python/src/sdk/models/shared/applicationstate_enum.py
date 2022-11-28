from dataclasses import dataclass, field
from enum import Enum

class ApplicationStateEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"
    CREATE_FAILED = "CREATE_FAILED"
    DELETE_FAILED = "DELETE_FAILED"

