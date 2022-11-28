from dataclasses import dataclass, field
from enum import Enum

class BillingMethodEnum(str, Enum):
    METERED = "METERED"
    UNMETERED = "UNMETERED"

