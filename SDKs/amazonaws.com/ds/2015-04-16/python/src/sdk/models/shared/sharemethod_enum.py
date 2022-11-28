from dataclasses import dataclass, field
from enum import Enum

class ShareMethodEnum(str, Enum):
    ORGANIZATIONS = "ORGANIZATIONS"
    HANDSHAKE = "HANDSHAKE"

