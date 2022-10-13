from dataclasses import dataclass, field
from typing import Enum

class AcceleratorStatusEnum(str, Enum):
    DEPLOYED = "DEPLOYED"
    IN_PROGRESS = "IN_PROGRESS"

