from dataclasses import dataclass, field
from enum import Enum

class VirtualGatewayPortProtocolEnum(str, Enum):
    HTTP = "http"
    HTTP2 = "http2"
    GRPC = "grpc"

