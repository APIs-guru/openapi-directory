from dataclasses import dataclass, field
from enum import Enum

class TunnelInsideIPVersionEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"

