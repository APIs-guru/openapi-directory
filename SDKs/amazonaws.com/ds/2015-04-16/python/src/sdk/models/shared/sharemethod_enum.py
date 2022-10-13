from dataclasses import dataclass, field
from typing import Enum

class ShareMethodEnum(str, Enum):
    ORGANIZATIONS = "ORGANIZATIONS"
    HANDSHAKE = "HANDSHAKE"

