from dataclasses import dataclass, field
from enum import Enum

class FleetTypeEnum(str, Enum):
    REQUEST = "request"
    MAINTAIN = "maintain"
    INSTANT = "instant"

