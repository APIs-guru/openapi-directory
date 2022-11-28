from dataclasses import dataclass, field
from enum import Enum

class DataCompressionTypeEnum(str, Enum):
    NONE = "NONE"
    LZ4 = "LZ4"

