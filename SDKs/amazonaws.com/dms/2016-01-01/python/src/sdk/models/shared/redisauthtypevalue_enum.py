from dataclasses import dataclass, field
from typing import Enum

class RedisAuthTypeValueEnum(str, Enum):
    NONE = "none"
    AUTH_ROLE = "auth-role"
    AUTH_TOKEN = "auth-token"

