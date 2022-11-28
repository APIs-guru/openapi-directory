from dataclasses import dataclass, field
from enum import Enum

class VolumeStatusNameEnum(str, Enum):
    IO_ENABLED = "io-enabled"
    IO_PERFORMANCE = "io-performance"

