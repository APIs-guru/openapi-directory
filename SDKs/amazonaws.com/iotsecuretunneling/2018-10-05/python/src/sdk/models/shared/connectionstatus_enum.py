from dataclasses import dataclass, field
from enum import Enum

class ConnectionStatusEnum(str, Enum):
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"

