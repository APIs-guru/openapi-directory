from dataclasses import dataclass, field
from enum import Enum

class AcceptanceTypeEnum(str, Enum):
    ACCEPT = "ACCEPT"
    REJECT = "REJECT"

