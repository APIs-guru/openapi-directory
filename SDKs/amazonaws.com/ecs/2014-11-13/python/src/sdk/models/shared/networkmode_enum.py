from dataclasses import dataclass, field
from typing import Enum

class NetworkModeEnum(str, Enum):
    BRIDGE = "bridge"
    HOST = "host"
    AWSVPC = "awsvpc"
    NONE = "none"

