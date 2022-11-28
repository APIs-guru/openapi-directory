from dataclasses import dataclass, field
from enum import Enum

class RecipeOutputFormatEnum(str, Enum):
    JSON = "JSON"
    YAML = "YAML"

