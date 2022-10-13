from dataclasses import dataclass, field
from typing import Enum

class MfaTypesElementEnum(str, Enum):
    SMS = "SMS"
    TOTP = "TOTP"

