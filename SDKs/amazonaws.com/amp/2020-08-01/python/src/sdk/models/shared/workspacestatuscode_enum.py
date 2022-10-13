from dataclasses import dataclass, field
from typing import Enum

class WorkspaceStatusCodeEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    CREATION_FAILED = "CREATION_FAILED"

