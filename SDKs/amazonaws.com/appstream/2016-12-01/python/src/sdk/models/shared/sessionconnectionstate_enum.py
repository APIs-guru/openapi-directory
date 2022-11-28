from dataclasses import dataclass, field
from enum import Enum

class SessionConnectionStateEnum(str, Enum):
    CONNECTED = "CONNECTED"
    NOT_CONNECTED = "NOT_CONNECTED"

