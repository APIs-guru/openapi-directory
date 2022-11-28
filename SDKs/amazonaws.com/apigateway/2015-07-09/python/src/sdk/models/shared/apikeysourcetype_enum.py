from dataclasses import dataclass, field
from enum import Enum

class APIKeySourceTypeEnum(str, Enum):
    HEADER = "HEADER"
    AUTHORIZER = "AUTHORIZER"

