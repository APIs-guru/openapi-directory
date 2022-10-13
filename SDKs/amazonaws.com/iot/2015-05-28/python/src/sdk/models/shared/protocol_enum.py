from dataclasses import dataclass, field
from typing import Enum

class ProtocolEnum(str, Enum):
    MQTT = "MQTT"
    HTTP = "HTTP"

