from dataclasses import dataclass, field
from enum import Enum

class DevicePoolTypeEnum(str, Enum):
    CURATED = "CURATED"
    PRIVATE = "PRIVATE"

