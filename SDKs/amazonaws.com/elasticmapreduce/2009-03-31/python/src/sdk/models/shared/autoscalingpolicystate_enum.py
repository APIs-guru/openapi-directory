from dataclasses import dataclass, field
from enum import Enum

class AutoScalingPolicyStateEnum(str, Enum):
    PENDING = "PENDING"
    ATTACHING = "ATTACHING"
    ATTACHED = "ATTACHED"
    DETACHING = "DETACHING"
    DETACHED = "DETACHED"
    FAILED = "FAILED"

