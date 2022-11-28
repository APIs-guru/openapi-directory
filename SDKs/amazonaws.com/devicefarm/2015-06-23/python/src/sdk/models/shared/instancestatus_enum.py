from dataclasses import dataclass, field
from enum import Enum

class InstanceStatusEnum(str, Enum):
    IN_USE = "IN_USE"
    PREPARING = "PREPARING"
    AVAILABLE = "AVAILABLE"
    NOT_AVAILABLE = "NOT_AVAILABLE"

