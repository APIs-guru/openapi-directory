from dataclasses import dataclass, field
from typing import Enum

class OnDemandCapacityReservationPreferenceEnum(str, Enum):
    OPEN = "open"
    NONE = "none"

