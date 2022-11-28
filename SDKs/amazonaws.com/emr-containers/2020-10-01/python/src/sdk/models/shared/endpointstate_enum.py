from dataclasses import dataclass, field
from enum import Enum

class EndpointStateEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    TERMINATING = "TERMINATING"
    TERMINATED = "TERMINATED"
    TERMINATED_WITH_ERRORS = "TERMINATED_WITH_ERRORS"

