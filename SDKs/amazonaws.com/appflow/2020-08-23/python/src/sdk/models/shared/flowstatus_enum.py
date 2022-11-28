from dataclasses import dataclass, field
from enum import Enum

class FlowStatusEnum(str, Enum):
    ACTIVE = "Active"
    DEPRECATED = "Deprecated"
    DELETED = "Deleted"
    DRAFT = "Draft"
    ERRORED = "Errored"
    SUSPENDED = "Suspended"

