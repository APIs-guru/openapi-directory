from dataclasses import dataclass, field
from typing import Enum

class PreventUserExistenceErrorTypesEnum(str, Enum):
    LEGACY = "LEGACY"
    ENABLED = "ENABLED"

