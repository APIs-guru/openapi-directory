from dataclasses import dataclass, field
from typing import Enum

class DirectoryStageEnum(str, Enum):
    REQUESTED = "Requested"
    CREATING = "Creating"
    CREATED = "Created"
    ACTIVE = "Active"
    INOPERABLE = "Inoperable"
    IMPAIRED = "Impaired"
    RESTORING = "Restoring"
    RESTORE_FAILED = "RestoreFailed"
    DELETING = "Deleting"
    DELETED = "Deleted"
    FAILED = "Failed"

