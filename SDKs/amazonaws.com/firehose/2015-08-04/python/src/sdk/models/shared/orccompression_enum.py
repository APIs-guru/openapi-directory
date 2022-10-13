from dataclasses import dataclass, field
from typing import Enum

class OrcCompressionEnum(str, Enum):
    NONE = "NONE"
    ZLIB = "ZLIB"
    SNAPPY = "SNAPPY"

