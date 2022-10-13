from dataclasses import dataclass, field
from typing import Enum

class AuthResourcesEnum(str, Enum):
    USER_POOL_ONLY = "USER_POOL_ONLY"
    IDENTITY_POOL_AND_USER_POOL = "IDENTITY_POOL_AND_USER_POOL"

