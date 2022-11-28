from dataclasses import dataclass, field
from enum import Enum

class OfferingTypeValuesEnum(str, Enum):
    HEAVY_UTILIZATION = "Heavy Utilization"
    MEDIUM_UTILIZATION = "Medium Utilization"
    LIGHT_UTILIZATION = "Light Utilization"
    NO_UPFRONT = "No Upfront"
    PARTIAL_UPFRONT = "Partial Upfront"
    ALL_UPFRONT = "All Upfront"

