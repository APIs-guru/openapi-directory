from dataclasses import dataclass, field
from typing import Enum

class CloudHsmObjectStateEnum(str, Enum):
    READY = "READY"
    UPDATING = "UPDATING"
    DEGRADED = "DEGRADED"

