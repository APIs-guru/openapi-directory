from dataclasses import dataclass, field
from enum import Enum

class LocalGatewayRouteTypeEnum(str, Enum):
    STATIC = "static"
    PROPAGATED = "propagated"

