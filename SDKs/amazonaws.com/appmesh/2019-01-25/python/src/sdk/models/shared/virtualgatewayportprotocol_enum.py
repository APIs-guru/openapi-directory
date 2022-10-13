from dataclasses import dataclass, field
from typing import Enum

class VirtualGatewayPortProtocolEnum(str, Enum):
    HTTP = "http"
    HTTP2 = "http2"
    GRPC = "grpc"

