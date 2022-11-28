from dataclasses import dataclass, field
from enum import Enum

class ClientAffinityEnum(str, Enum):
    NONE = "NONE"
    SOURCE_IP = "SOURCE_IP"

