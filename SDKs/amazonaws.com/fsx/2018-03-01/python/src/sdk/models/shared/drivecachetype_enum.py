from dataclasses import dataclass, field
from typing import Enum

class DriveCacheTypeEnum(str, Enum):
    NONE = "NONE"
    READ = "READ"

