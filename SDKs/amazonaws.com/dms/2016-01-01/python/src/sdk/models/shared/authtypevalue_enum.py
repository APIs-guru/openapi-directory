from dataclasses import dataclass, field
from enum import Enum

class AuthTypeValueEnum(str, Enum):
    NO = "no"
    PASSWORD = "password"

