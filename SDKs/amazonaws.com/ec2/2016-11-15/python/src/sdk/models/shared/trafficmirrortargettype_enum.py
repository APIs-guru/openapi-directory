from dataclasses import dataclass, field
from enum import Enum

class TrafficMirrorTargetTypeEnum(str, Enum):
    NETWORK_INTERFACE = "network-interface"
    NETWORK_LOAD_BALANCER = "network-load-balancer"

