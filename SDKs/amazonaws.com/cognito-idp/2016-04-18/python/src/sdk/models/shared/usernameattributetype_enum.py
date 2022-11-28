from dataclasses import dataclass, field
from enum import Enum

class UsernameAttributeTypeEnum(str, Enum):
    PHONE_NUMBER = "phone_number"
    EMAIL = "email"

