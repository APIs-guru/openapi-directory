from dataclasses import dataclass, field
from typing import Enum

class RecoveryOptionNameTypeEnum(str, Enum):
    VERIFIED_EMAIL = "verified_email"
    VERIFIED_PHONE_NUMBER = "verified_phone_number"
    ADMIN_ONLY = "admin_only"

