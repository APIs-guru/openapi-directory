from dataclasses import dataclass, field
from enum import Enum

class UserPoolMfaTypeEnum(str, Enum):
    OFF = "OFF"
    ON = "ON"
    OPTIONAL = "OPTIONAL"

