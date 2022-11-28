from dataclasses import dataclass, field
from enum import Enum

class DiskTypeEnum(str, Enum):
    HDD = "hdd"
    SSD = "ssd"

