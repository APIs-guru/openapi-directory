from dataclasses import dataclass, field
from enum import Enum

class ResourceTypeValuesEnum(str, Enum):
    VOLUME = "VOLUME"
    INSTANCE = "INSTANCE"

