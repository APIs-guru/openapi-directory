from dataclasses import dataclass, field
from enum import Enum

class RxNormAttributeTypeEnum(str, Enum):
    DOSAGE = "DOSAGE"
    DURATION = "DURATION"
    FORM = "FORM"
    FREQUENCY = "FREQUENCY"
    RATE = "RATE"
    ROUTE_OR_MODE = "ROUTE_OR_MODE"
    STRENGTH = "STRENGTH"

