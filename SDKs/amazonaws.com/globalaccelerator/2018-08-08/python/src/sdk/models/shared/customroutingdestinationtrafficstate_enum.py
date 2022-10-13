from dataclasses import dataclass, field
from typing import Enum

class CustomRoutingDestinationTrafficStateEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

