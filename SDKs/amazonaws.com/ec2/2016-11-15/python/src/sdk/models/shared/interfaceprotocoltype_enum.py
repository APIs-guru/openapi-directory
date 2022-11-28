from dataclasses import dataclass, field
from enum import Enum

class InterfaceProtocolTypeEnum(str, Enum):
    VLAN = "VLAN"
    GRE = "GRE"

