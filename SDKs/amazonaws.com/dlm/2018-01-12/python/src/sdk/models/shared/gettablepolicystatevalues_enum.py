from dataclasses import dataclass, field
from typing import Enum

class GettablePolicyStateValuesEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    ERROR = "ERROR"

