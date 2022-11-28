from dataclasses import dataclass, field
from enum import Enum

class TransportProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"

