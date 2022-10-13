from dataclasses import dataclass, field
from typing import Enum

class ThingIndexingModeEnum(str, Enum):
    OFF = "OFF"
    REGISTRY = "REGISTRY"
    REGISTRY_AND_SHADOW = "REGISTRY_AND_SHADOW"

