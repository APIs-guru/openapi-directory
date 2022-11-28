from dataclasses import dataclass, field
from enum import Enum

class ProtocolTypeEnum(str, Enum):
    WEBSOCKET = "WEBSOCKET"
    HTTP = "HTTP"

