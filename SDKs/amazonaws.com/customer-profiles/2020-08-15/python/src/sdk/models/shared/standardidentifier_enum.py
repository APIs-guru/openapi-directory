from dataclasses import dataclass, field
from typing import Enum

class StandardIdentifierEnum(str, Enum):
    PROFILE = "PROFILE"
    ASSET = "ASSET"
    CASE = "CASE"
    UNIQUE = "UNIQUE"
    SECONDARY = "SECONDARY"
    LOOKUP_ONLY = "LOOKUP_ONLY"
    NEW_ONLY = "NEW_ONLY"

