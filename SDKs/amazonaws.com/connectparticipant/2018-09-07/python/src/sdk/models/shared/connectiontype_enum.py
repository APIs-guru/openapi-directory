from dataclasses import dataclass, field
from enum import Enum

class ConnectionTypeEnum(str, Enum):
    WEBSOCKET = "WEBSOCKET"
    CONNECTION_CREDENTIALS = "CONNECTION_CREDENTIALS"

