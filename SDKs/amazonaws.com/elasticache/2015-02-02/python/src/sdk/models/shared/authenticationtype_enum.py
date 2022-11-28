from dataclasses import dataclass, field
from enum import Enum

class AuthenticationTypeEnum(str, Enum):
    PASSWORD = "password"
    NO_PASSWORD = "no-password"

