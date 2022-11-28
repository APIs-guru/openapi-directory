from dataclasses import dataclass, field
from enum import Enum

class OfferingClassTypeEnum(str, Enum):
    STANDARD = "standard"
    CONVERTIBLE = "convertible"

