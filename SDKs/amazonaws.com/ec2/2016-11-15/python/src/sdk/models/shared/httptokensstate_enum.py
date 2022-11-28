from dataclasses import dataclass, field
from enum import Enum

class HTTPTokensStateEnum(str, Enum):
    OPTIONAL = "optional"
    REQUIRED = "required"

