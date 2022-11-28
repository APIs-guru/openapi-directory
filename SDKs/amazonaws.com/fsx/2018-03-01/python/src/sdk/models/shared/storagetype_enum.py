from dataclasses import dataclass, field
from enum import Enum

class StorageTypeEnum(str, Enum):
    SSD = "SSD"
    HDD = "HDD"

