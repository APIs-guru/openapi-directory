from dataclasses import dataclass, field
from enum import Enum

class FleetActivityStatusEnum(str, Enum):
    ERROR = "error"
    PENDING_FULFILLMENT = "pending_fulfillment"
    PENDING_TERMINATION = "pending_termination"
    FULFILLED = "fulfilled"

