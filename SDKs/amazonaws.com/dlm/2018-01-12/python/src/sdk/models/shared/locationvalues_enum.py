from dataclasses import dataclass, field
from enum import Enum

class LocationValuesEnum(str, Enum):
    CLOUD = "CLOUD"
    OUTPOST_LOCAL = "OUTPOST_LOCAL"

