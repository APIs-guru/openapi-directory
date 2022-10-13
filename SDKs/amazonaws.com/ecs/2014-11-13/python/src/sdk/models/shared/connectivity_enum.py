from dataclasses import dataclass, field
from typing import Enum

class ConnectivityEnum(str, Enum):
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"

