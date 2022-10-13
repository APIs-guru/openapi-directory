from dataclasses import dataclass, field
from typing import Enum

class EventFilterTypeEnum(str, Enum):
    SIGN_IN = "SIGN_IN"
    PASSWORD_CHANGE = "PASSWORD_CHANGE"
    SIGN_UP = "SIGN_UP"

