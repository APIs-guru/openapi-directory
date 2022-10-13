from dataclasses import dataclass, field
from typing import Enum

class HealthCheckProtocolEnum(str, Enum):
    TCP = "TCP"
    HTTP = "HTTP"

