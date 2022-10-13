from dataclasses import dataclass, field
from typing import Enum

class PortProtocolEnum(str, Enum):
    HTTP = "http"
    TCP = "tcp"

