from dataclasses import dataclass, field
from typing import Enum

class ExecuteCommandLoggingEnum(str, Enum):
    NONE = "NONE"
    DEFAULT = "DEFAULT"
    OVERRIDE = "OVERRIDE"

