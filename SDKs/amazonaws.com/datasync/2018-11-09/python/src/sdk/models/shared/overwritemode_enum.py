from dataclasses import dataclass, field
from typing import Enum

class OverwriteModeEnum(str, Enum):
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"

