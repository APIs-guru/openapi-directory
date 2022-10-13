from dataclasses import dataclass, field
from typing import Enum

class ClientAffinityEnum(str, Enum):
    NONE = "NONE"
    SOURCE_IP = "SOURCE_IP"

