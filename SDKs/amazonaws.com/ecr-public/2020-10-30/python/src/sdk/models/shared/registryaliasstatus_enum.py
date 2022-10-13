from dataclasses import dataclass, field
from typing import Enum

class RegistryAliasStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    PENDING = "PENDING"
    REJECTED = "REJECTED"

