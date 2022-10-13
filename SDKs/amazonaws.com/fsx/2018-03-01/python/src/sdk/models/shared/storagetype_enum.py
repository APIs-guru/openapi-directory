from dataclasses import dataclass, field
from typing import Enum

class StorageTypeEnum(str, Enum):
    SSD = "SSD"
    HDD = "HDD"

