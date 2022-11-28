from dataclasses import dataclass, field
from enum import Enum

class NetworkProfileTypeEnum(str, Enum):
    CURATED = "CURATED"
    PRIVATE = "PRIVATE"

