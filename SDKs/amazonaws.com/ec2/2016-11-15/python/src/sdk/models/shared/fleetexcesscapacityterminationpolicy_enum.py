from dataclasses import dataclass, field
from enum import Enum

class FleetExcessCapacityTerminationPolicyEnum(str, Enum):
    NO_TERMINATION = "no-termination"
    TERMINATION = "termination"

