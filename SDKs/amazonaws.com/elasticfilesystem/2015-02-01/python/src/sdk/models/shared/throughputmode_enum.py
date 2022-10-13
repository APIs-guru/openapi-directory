from dataclasses import dataclass, field
from typing import Enum

class ThroughputModeEnum(str, Enum):
    BURSTING = "bursting"
    PROVISIONED = "provisioned"

