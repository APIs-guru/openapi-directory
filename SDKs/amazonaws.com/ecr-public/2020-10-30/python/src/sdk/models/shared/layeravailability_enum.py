from dataclasses import dataclass, field
from typing import Enum

class LayerAvailabilityEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    UNAVAILABLE = "UNAVAILABLE"

