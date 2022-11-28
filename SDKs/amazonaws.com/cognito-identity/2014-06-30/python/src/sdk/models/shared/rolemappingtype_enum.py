from dataclasses import dataclass, field
from enum import Enum

class RoleMappingTypeEnum(str, Enum):
    TOKEN = "Token"
    RULES = "Rules"

