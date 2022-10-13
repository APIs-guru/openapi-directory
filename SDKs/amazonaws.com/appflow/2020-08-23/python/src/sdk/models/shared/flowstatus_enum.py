from dataclasses import dataclass, field
from typing import Enum

class FlowStatusEnum(str, Enum):
    ACTIVE = "Active"
    DEPRECATED = "Deprecated"
    DELETED = "Deleted"
    DRAFT = "Draft"
    ERRORED = "Errored"
    SUSPENDED = "Suspended"

