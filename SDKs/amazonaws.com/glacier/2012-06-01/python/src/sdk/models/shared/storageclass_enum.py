from dataclasses import dataclass, field
from enum import Enum

class StorageClassEnum(str, Enum):
    STANDARD = "STANDARD"
    REDUCED_REDUNDANCY = "REDUCED_REDUNDANCY"
    STANDARD_IA = "STANDARD_IA"

