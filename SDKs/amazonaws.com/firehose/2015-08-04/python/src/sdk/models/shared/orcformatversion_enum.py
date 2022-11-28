from dataclasses import dataclass, field
from enum import Enum

class OrcFormatVersionEnum(str, Enum):
    V0_11 = "V0_11"
    V0_12 = "V0_12"

