from dataclasses import dataclass, field
from typing import Enum

class AuthorizerTypeEnum(str, Enum):
    REQUEST = "REQUEST"
    JWT = "JWT"

