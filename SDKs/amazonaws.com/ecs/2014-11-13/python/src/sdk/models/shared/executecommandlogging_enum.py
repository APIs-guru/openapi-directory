from dataclasses import dataclass, field
from enum import Enum

class ExecuteCommandLoggingEnum(str, Enum):
    NONE = "NONE"
    DEFAULT = "DEFAULT"
    OVERRIDE = "OVERRIDE"

