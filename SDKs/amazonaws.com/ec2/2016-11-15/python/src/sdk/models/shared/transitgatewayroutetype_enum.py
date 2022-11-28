from dataclasses import dataclass, field
from enum import Enum

class TransitGatewayRouteTypeEnum(str, Enum):
    STATIC = "static"
    PROPAGATED = "propagated"

