from dataclasses import dataclass, field
from typing import Enum

class ConnectionModeEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"

