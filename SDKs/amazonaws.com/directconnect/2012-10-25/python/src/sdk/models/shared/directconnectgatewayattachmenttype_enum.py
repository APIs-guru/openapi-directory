from dataclasses import dataclass, field
from typing import Enum

class DirectConnectGatewayAttachmentTypeEnum(str, Enum):
    TRANSIT_VIRTUAL_INTERFACE = "TransitVirtualInterface"
    PRIVATE_VIRTUAL_INTERFACE = "PrivateVirtualInterface"

