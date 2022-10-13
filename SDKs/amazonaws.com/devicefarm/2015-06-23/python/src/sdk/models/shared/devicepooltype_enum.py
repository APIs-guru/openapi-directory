from dataclasses import dataclass, field
from typing import Enum

class DevicePoolTypeEnum(str, Enum):
    CURATED = "CURATED"
    PRIVATE = "PRIVATE"

