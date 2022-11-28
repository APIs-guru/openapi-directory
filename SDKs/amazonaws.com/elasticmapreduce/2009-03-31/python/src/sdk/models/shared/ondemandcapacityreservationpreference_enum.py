from dataclasses import dataclass, field
from enum import Enum

class OnDemandCapacityReservationPreferenceEnum(str, Enum):
    OPEN = "open"
    NONE = "none"

