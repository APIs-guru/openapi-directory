from dataclasses import dataclass, field
from enum import Enum

class TypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATION = "ORGANIZATION"

