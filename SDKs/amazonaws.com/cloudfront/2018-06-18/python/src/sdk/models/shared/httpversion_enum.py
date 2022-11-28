from dataclasses import dataclass, field
from enum import Enum

class HTTPVersionEnum(str, Enum):
    HTTP1_1 = "http1.1"
    HTTP2 = "http2"

