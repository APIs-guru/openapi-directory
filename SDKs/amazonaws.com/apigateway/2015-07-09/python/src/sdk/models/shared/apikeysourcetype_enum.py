from dataclasses import dataclass, field
from typing import Enum

class APIKeySourceTypeEnum(str, Enum):
    HEADER = "HEADER"
    AUTHORIZER = "AUTHORIZER"

