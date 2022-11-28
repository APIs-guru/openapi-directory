from dataclasses import dataclass, field
from enum import Enum

class VolumeStatusInfoStatusEnum(str, Enum):
    OK = "ok"
    IMPAIRED = "impaired"
    INSUFFICIENT_DATA = "insufficient-data"

