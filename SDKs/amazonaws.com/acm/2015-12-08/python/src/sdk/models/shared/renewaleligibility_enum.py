from dataclasses import dataclass, field
from typing import Enum

class RenewalEligibilityEnum(str, Enum):
    ELIGIBLE = "ELIGIBLE"
    INELIGIBLE = "INELIGIBLE"

