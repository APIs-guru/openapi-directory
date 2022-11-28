from dataclasses import dataclass, field
from enum import Enum

class ManagedTerminationProtectionEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

