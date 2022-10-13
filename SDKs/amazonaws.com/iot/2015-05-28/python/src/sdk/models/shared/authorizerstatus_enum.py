from dataclasses import dataclass, field
from typing import Enum

class AuthorizerStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

