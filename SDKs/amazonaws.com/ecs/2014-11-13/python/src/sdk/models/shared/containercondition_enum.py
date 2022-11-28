from dataclasses import dataclass, field
from enum import Enum

class ContainerConditionEnum(str, Enum):
    START = "START"
    COMPLETE = "COMPLETE"
    SUCCESS = "SUCCESS"
    HEALTHY = "HEALTHY"

