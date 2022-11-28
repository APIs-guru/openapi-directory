from dataclasses import dataclass, field
from enum import Enum

class ModelStatusEnum(str, Enum):
    PENDING_BUILD = "PENDING_BUILD"
    ACTIVE = "ACTIVE"
    EXPIRED = "EXPIRED"

