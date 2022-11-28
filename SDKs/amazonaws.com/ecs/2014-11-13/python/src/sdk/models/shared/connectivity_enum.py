from dataclasses import dataclass, field
from enum import Enum

class ConnectivityEnum(str, Enum):
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"

