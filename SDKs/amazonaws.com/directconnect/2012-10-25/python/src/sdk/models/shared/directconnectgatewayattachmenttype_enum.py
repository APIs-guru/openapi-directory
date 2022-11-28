from dataclasses import dataclass, field
from enum import Enum

class DirectConnectGatewayAttachmentTypeEnum(str, Enum):
    TRANSIT_VIRTUAL_INTERFACE = "TransitVirtualInterface"
    PRIVATE_VIRTUAL_INTERFACE = "PrivateVirtualInterface"

