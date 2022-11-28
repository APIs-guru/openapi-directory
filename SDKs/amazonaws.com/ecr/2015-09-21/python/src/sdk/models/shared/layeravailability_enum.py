from dataclasses import dataclass, field
from enum import Enum

class LayerAvailabilityEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    UNAVAILABLE = "UNAVAILABLE"

