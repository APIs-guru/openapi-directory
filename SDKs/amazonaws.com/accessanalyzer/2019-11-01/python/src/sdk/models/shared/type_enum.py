from dataclasses import dataclass, field
from typing import Enum

class TypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATION = "ORGANIZATION"

