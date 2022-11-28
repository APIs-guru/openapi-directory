from dataclasses import dataclass, field
from enum import Enum

class TransitGatewayAttachmentResourceTypeEnum(str, Enum):
    VPC = "vpc"
    VPN = "vpn"
    DIRECT_CONNECT_GATEWAY = "direct-connect-gateway"
    CONNECT = "connect"
    PEERING = "peering"
    TGW_PEERING = "tgw-peering"

