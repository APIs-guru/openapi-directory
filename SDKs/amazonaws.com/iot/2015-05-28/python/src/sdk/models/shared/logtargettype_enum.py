from dataclasses import dataclass, field
from typing import Enum

class LogTargetTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    THING_GROUP = "THING_GROUP"

