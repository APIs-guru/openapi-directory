from dataclasses import dataclass, field
from typing import Enum

class VerifiedAttributeTypeEnum(str, Enum):
    PHONE_NUMBER = "phone_number"
    EMAIL = "email"

