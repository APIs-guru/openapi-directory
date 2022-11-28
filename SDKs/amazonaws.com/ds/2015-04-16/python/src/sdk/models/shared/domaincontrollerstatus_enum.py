from dataclasses import dataclass, field
from enum import Enum

class DomainControllerStatusEnum(str, Enum):
    CREATING = "Creating"
    ACTIVE = "Active"
    IMPAIRED = "Impaired"
    RESTORING = "Restoring"
    DELETING = "Deleting"
    DELETED = "Deleted"
    FAILED = "Failed"

