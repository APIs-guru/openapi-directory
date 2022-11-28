from dataclasses import dataclass, field
from enum import Enum

class CustomRoutingProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"

