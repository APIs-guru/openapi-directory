from dataclasses import dataclass, field
from enum import Enum

class ConnectionModeEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"

