from dataclasses import dataclass, field
from typing import Enum

class AliasAttributeTypeEnum(str, Enum):
    PHONE_NUMBER = "phone_number"
    EMAIL = "email"
    PREFERRED_USERNAME = "preferred_username"

