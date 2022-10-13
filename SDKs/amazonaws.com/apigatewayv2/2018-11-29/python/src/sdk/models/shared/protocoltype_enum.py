from dataclasses import dataclass, field
from typing import Enum

class ProtocolTypeEnum(str, Enum):
    WEBSOCKET = "WEBSOCKET"
    HTTP = "HTTP"

