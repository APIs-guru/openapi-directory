from dataclasses import dataclass, field
from enum import Enum

class GettablePolicyStateValuesEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    ERROR = "ERROR"

