from dataclasses import dataclass, field
from typing import Enum

class IPProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"

