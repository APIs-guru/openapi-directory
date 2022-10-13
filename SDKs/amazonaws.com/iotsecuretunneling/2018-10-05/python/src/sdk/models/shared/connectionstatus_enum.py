from dataclasses import dataclass, field
from typing import Enum

class ConnectionStatusEnum(str, Enum):
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"

