from dataclasses import dataclass, field
from enum import Enum

class PreventUserExistenceErrorTypesEnum(str, Enum):
    LEGACY = "LEGACY"
    ENABLED = "ENABLED"

