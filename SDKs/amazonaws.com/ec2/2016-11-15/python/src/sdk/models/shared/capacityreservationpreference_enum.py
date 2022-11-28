from dataclasses import dataclass, field
from enum import Enum

class CapacityReservationPreferenceEnum(str, Enum):
    OPEN = "open"
    NONE = "none"

