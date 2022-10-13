from dataclasses import dataclass, field
from typing import Enum

class EnableHybridValuesEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"

