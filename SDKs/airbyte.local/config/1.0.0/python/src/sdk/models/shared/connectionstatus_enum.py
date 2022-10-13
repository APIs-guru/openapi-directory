from dataclasses import dataclass, field
from typing import Enum

class ConnectionStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    DEPRECATED = "deprecated"

