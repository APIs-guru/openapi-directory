from dataclasses import dataclass, field
from typing import Enum

class ConnectionTypeEnum(str, Enum):
    WEBSOCKET = "WEBSOCKET"
    CONNECTION_CREDENTIALS = "CONNECTION_CREDENTIALS"

