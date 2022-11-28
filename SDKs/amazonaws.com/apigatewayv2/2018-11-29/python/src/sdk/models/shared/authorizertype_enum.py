from dataclasses import dataclass, field
from enum import Enum

class AuthorizerTypeEnum(str, Enum):
    REQUEST = "REQUEST"
    JWT = "JWT"

