from dataclasses import dataclass, field
from enum import Enum

class NetworkModeEnum(str, Enum):
    BRIDGE = "bridge"
    HOST = "host"
    AWSVPC = "awsvpc"
    NONE = "none"

