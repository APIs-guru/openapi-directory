from dataclasses import dataclass, field
from enum import Enum

class VirtualGatewayListenerTLSModeEnum(str, Enum):
    STRICT = "STRICT"
    PERMISSIVE = "PERMISSIVE"
    DISABLED = "DISABLED"

