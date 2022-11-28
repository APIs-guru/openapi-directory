from dataclasses import dataclass, field
from enum import Enum

class EndpointStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    FAILED = "FAILED"
    IN_SERVICE = "IN_SERVICE"
    UPDATING = "UPDATING"

