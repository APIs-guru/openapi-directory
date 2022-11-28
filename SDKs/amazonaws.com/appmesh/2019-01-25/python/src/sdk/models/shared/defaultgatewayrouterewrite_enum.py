from dataclasses import dataclass, field
from enum import Enum

class DefaultGatewayRouteRewriteEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

