from dataclasses import dataclass, field
from typing import Enum

class RecipeOutputFormatEnum(str, Enum):
    JSON = "JSON"
    YAML = "YAML"

