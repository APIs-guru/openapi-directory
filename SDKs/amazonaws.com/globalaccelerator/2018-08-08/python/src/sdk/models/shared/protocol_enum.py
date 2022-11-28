from dataclasses import dataclass, field
from enum import Enum

class ProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"

