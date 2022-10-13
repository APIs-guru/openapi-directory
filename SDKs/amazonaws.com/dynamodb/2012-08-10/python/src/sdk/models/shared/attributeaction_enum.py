from dataclasses import dataclass, field
from typing import Enum

class AttributeActionEnum(str, Enum):
    ADD = "ADD"
    PUT = "PUT"
    DELETE = "DELETE"

