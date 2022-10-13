from dataclasses import dataclass, field
from typing import Enum

class EbsVolumeTypeEnum(str, Enum):
    STANDARD = "standard"
    IO1 = "io1"
    IO2 = "io2"
    GP2 = "gp2"
    GP3 = "gp3"
    SC1 = "sc1"
    ST1 = "st1"

