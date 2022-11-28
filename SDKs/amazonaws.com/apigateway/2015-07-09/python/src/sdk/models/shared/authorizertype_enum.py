from dataclasses import dataclass, field
from enum import Enum

class AuthorizerTypeEnum(str, Enum):
    TOKEN = "TOKEN"
    REQUEST = "REQUEST"
    COGNITO_USER_POOLS = "COGNITO_USER_POOLS"

