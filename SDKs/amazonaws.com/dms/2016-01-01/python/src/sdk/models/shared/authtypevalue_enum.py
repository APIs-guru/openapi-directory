from dataclasses import dataclass, field
from typing import Enum

class AuthTypeValueEnum(str, Enum):
    NO = "no"
    PASSWORD = "password"

