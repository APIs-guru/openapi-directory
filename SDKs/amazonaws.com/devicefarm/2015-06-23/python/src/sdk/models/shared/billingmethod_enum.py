from dataclasses import dataclass, field
from typing import Enum

class BillingMethodEnum(str, Enum):
    METERED = "METERED"
    UNMETERED = "UNMETERED"

