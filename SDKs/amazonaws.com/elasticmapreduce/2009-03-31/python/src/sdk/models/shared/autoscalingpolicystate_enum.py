from dataclasses import dataclass, field
from typing import Enum

class AutoScalingPolicyStateEnum(str, Enum):
    PENDING = "PENDING"
    ATTACHING = "ATTACHING"
    ATTACHED = "ATTACHED"
    DETACHING = "DETACHING"
    DETACHED = "DETACHED"
    FAILED = "FAILED"

