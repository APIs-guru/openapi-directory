from dataclasses import dataclass, field
from typing import Enum

class LanguageEnum(str, Enum):
    PYTHON = "PYTHON"
    SCALA = "SCALA"

