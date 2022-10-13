from dataclasses import dataclass, field
from typing import Enum

class ManagedTerminationProtectionEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

