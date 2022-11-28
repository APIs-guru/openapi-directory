from dataclasses import dataclass, field
from enum import Enum

class HealthCheckProtocolEnum(str, Enum):
    TCP = "TCP"
    HTTP = "HTTP"
    HTTPS = "HTTPS"

