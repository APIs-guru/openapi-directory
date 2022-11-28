from dataclasses import dataclass, field
from enum import Enum

class ExcessCapacityTerminationPolicyEnum(str, Enum):
    NO_TERMINATION = "noTermination"
    DEFAULT = "default"

