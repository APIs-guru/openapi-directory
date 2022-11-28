from dataclasses import dataclass, field
from enum import Enum

class CustomerActionNameEnum(str, Enum):
    SNOOZE = "SNOOZE"
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"
    ACKNOWLEDGE = "ACKNOWLEDGE"
    RESET = "RESET"

