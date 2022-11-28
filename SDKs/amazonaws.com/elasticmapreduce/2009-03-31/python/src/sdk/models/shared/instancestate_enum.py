from dataclasses import dataclass, field
from enum import Enum

class InstanceStateEnum(str, Enum):
    AWAITING_FULFILLMENT = "AWAITING_FULFILLMENT"
    PROVISIONING = "PROVISIONING"
    BOOTSTRAPPING = "BOOTSTRAPPING"
    RUNNING = "RUNNING"
    TERMINATED = "TERMINATED"

