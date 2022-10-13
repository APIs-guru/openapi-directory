from dataclasses import dataclass, field
from typing import Enum

class RxNormAttributeTypeEnum(str, Enum):
    DOSAGE = "DOSAGE"
    DURATION = "DURATION"
    FORM = "FORM"
    FREQUENCY = "FREQUENCY"
    RATE = "RATE"
    ROUTE_OR_MODE = "ROUTE_OR_MODE"
    STRENGTH = "STRENGTH"

