from dataclasses import dataclass, field
from enum import Enum

class NetworkInterfaceStatusEnum(str, Enum):
    AVAILABLE = "available"
    ASSOCIATED = "associated"
    ATTACHING = "attaching"
    IN_USE = "in-use"
    DETACHING = "detaching"

