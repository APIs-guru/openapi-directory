from dataclasses import dataclass, field
from typing import Enum,List

class ListenerTLSModeEnum(str, Enum):
    STRICT = "STRICT"
    PERMISSIVE = "PERMISSIVE"
    DISABLED = "DISABLED"

