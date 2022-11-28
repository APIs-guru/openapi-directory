from dataclasses import dataclass, field
from enum import Enum

class OverwriteModeEnum(str, Enum):
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"

