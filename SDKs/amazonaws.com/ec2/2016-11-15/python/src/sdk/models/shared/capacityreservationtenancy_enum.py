from dataclasses import dataclass, field
from enum import Enum

class CapacityReservationTenancyEnum(str, Enum):
    DEFAULT = "default"
    DEDICATED = "dedicated"

