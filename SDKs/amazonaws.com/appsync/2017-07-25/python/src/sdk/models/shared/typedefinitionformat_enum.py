from dataclasses import dataclass, field
from typing import Enum

class TypeDefinitionFormatEnum(str, Enum):
    SDL = "SDL"
    JSON = "JSON"

