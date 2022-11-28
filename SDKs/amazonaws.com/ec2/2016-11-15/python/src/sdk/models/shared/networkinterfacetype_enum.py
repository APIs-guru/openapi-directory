from dataclasses import dataclass, field
from enum import Enum

class NetworkInterfaceTypeEnum(str, Enum):
    INTERFACE = "interface"
    NAT_GATEWAY = "natGateway"
    EFA = "efa"
    TRUNK = "trunk"

