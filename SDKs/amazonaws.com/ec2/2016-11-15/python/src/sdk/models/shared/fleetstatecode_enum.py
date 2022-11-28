from dataclasses import dataclass, field
from enum import Enum

class FleetStateCodeEnum(str, Enum):
    SUBMITTED = "submitted"
    ACTIVE = "active"
    DELETED = "deleted"
    FAILED = "failed"
    DELETED_RUNNING = "deleted_running"
    DELETED_TERMINATING = "deleted_terminating"
    MODIFYING = "modifying"

