from dataclasses import dataclass, field
from enum import Enum

class TransitGatewayPropagationStateEnum(str, Enum):
    ENABLING = "enabling"
    ENABLED = "enabled"
    DISABLING = "disabling"
    DISABLED = "disabled"

