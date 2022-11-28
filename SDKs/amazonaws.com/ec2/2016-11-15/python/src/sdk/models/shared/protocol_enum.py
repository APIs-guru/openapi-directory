from dataclasses import dataclass, field
from enum import Enum

class ProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"

