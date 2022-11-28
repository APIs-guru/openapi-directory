from dataclasses import dataclass, field
from enum import Enum

class VpcEndpointTypeEnum(str, Enum):
    INTERFACE = "Interface"
    GATEWAY = "Gateway"
    GATEWAY_LOAD_BALANCER = "GatewayLoadBalancer"

