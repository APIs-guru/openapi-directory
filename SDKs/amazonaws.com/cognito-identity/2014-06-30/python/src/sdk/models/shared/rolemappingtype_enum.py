from dataclasses import dataclass, field
from typing import Enum

class RoleMappingTypeEnum(str, Enum):
    TOKEN = "Token"
    RULES = "Rules"

