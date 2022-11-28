from dataclasses import dataclass, field
from enum import Enum

class TypeDefinitionFormatEnum(str, Enum):
    SDL = "SDL"
    JSON = "JSON"

