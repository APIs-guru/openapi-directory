from dataclasses import dataclass, field
from typing import Enum

class AcceptanceTypeEnum(str, Enum):
    ACCEPT = "ACCEPT"
    REJECT = "REJECT"

