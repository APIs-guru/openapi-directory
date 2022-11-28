from dataclasses import dataclass, field
from enum import Enum

class LogTargetTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    THING_GROUP = "THING_GROUP"

