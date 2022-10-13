from dataclasses import dataclass, field
from typing import Enum

class StorageClassEnum(str, Enum):
    STANDARD = "STANDARD"
    REDUCED_REDUNDANCY = "REDUCED_REDUNDANCY"
    STANDARD_IA = "STANDARD_IA"

