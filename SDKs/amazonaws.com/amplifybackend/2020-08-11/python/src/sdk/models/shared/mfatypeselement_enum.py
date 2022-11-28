from dataclasses import dataclass, field
from enum import Enum

class MfaTypesElementEnum(str, Enum):
    SMS = "SMS"
    TOTP = "TOTP"

