from dataclasses import dataclass, field
from enum import Enum

class EnvironmentInfoTypeEnum(str, Enum):
    TAIL = "tail"
    BUNDLE = "bundle"

