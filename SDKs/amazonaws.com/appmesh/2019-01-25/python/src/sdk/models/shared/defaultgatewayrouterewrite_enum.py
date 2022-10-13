from dataclasses import dataclass, field
from typing import Enum

class DefaultGatewayRouteRewriteEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

