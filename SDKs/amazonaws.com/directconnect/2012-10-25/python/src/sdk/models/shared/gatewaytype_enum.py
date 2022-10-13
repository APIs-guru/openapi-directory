from dataclasses import dataclass, field
from typing import Enum

class GatewayTypeEnum(str, Enum):
    VIRTUAL_PRIVATE_GATEWAY = "virtualPrivateGateway"
    TRANSIT_GATEWAY = "transitGateway"

