from dataclasses import dataclass, field
from typing import Enum,List

class VirtualGatewayListenerTLSModeEnum(str, Enum):
    STRICT = "STRICT"
    PERMISSIVE = "PERMISSIVE"
    DISABLED = "DISABLED"

