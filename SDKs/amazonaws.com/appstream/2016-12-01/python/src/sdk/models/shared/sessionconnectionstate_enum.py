from dataclasses import dataclass, field
from typing import Enum

class SessionConnectionStateEnum(str, Enum):
    CONNECTED = "CONNECTED"
    NOT_CONNECTED = "NOT_CONNECTED"

