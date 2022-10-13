from dataclasses import dataclass, field
from typing import Enum

class ManagedCredentialsActionEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

