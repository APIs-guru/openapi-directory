from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeValuesEnum(str, Enum):
    VOLUME = "VOLUME"
    INSTANCE = "INSTANCE"

