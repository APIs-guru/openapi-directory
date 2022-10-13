from dataclasses import dataclass, field
from typing import Enum

class ContainerConditionEnum(str, Enum):
    START = "START"
    COMPLETE = "COMPLETE"
    SUCCESS = "SUCCESS"
    HEALTHY = "HEALTHY"

