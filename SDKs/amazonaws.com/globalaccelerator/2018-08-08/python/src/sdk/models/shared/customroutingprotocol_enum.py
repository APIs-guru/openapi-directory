from dataclasses import dataclass, field
from typing import Enum

class CustomRoutingProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"

