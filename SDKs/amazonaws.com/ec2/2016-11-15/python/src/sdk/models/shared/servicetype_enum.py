from dataclasses import dataclass, field
from enum import Enum

class ServiceTypeEnum(str, Enum):
    INTERFACE = "Interface"
    GATEWAY = "Gateway"
    GATEWAY_LOAD_BALANCER = "GatewayLoadBalancer"

