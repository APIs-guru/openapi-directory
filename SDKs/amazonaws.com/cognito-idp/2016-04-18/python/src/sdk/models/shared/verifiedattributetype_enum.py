from dataclasses import dataclass, field
from enum import Enum

class VerifiedAttributeTypeEnum(str, Enum):
    PHONE_NUMBER = "phone_number"
    EMAIL = "email"

