from dataclasses import dataclass, field
from enum import Enum

class PendingAutomaticFailoverStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

