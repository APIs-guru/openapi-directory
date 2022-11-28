from dataclasses import dataclass, field
from enum import Enum

class AuthTypeEnum(str, Enum):
    OAUTH = "OAUTH"
    BASIC_AUTH = "BASIC_AUTH"
    PERSONAL_ACCESS_TOKEN = "PERSONAL_ACCESS_TOKEN"

