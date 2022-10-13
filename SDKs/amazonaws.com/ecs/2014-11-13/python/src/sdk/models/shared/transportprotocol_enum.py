from dataclasses import dataclass, field
from typing import Enum

class TransportProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"

