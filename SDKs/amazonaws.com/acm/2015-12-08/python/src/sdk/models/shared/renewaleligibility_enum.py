from dataclasses import dataclass, field
from enum import Enum

class RenewalEligibilityEnum(str, Enum):
    ELIGIBLE = "ELIGIBLE"
    INELIGIBLE = "INELIGIBLE"

