from dataclasses import dataclass, field
from typing import Enum

class AuthorizerTypeEnum(str, Enum):
    TOKEN = "TOKEN"
    REQUEST = "REQUEST"
    COGNITO_USER_POOLS = "COGNITO_USER_POOLS"

