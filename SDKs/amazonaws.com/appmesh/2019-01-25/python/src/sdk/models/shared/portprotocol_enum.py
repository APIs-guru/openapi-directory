from dataclasses import dataclass, field
from enum import Enum

class PortProtocolEnum(str, Enum):
    HTTP = "http"
    TCP = "tcp"
    HTTP2 = "http2"
    GRPC = "grpc"

