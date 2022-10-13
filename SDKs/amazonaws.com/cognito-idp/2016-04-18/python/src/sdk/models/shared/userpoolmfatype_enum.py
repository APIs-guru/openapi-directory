from dataclasses import dataclass, field
from typing import Enum

class UserPoolMfaTypeEnum(str, Enum):
    OFF = "OFF"
    ON = "ON"
    OPTIONAL = "OPTIONAL"

