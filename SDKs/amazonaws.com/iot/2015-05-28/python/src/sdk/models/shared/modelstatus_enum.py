from dataclasses import dataclass, field
from typing import Enum

class ModelStatusEnum(str, Enum):
    PENDING_BUILD = "PENDING_BUILD"
    ACTIVE = "ACTIVE"
    EXPIRED = "EXPIRED"

