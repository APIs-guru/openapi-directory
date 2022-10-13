from dataclasses import dataclass, field
from typing import Enum

class AgentUpdateStatusEnum(str, Enum):
    PENDING = "PENDING"
    STAGING = "STAGING"
    STAGED = "STAGED"
    UPDATING = "UPDATING"
    UPDATED = "UPDATED"
    FAILED = "FAILED"

