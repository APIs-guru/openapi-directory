from dataclasses import dataclass, field
from enum import Enum

class ConnectionStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    DEPRECATED = "deprecated"

