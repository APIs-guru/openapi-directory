from dataclasses import dataclass, field
from enum import Enum

class PartyTypeEnum(str, Enum):
    INDIVIDUAL = "INDIVIDUAL"
    BUSINESS = "BUSINESS"
    OTHER = "OTHER"

