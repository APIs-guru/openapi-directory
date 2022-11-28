from dataclasses import dataclass, field
from enum import Enum

class OrcCompressionEnum(str, Enum):
    NONE = "NONE"
    ZLIB = "ZLIB"
    SNAPPY = "SNAPPY"

