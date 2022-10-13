from dataclasses import dataclass, field
from typing import Enum

class NetworkProfileTypeEnum(str, Enum):
    CURATED = "CURATED"
    PRIVATE = "PRIVATE"

