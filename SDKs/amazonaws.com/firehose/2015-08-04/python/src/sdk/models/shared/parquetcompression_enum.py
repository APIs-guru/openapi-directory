from dataclasses import dataclass, field
from typing import Enum

class ParquetCompressionEnum(str, Enum):
    UNCOMPRESSED = "UNCOMPRESSED"
    GZIP = "GZIP"
    SNAPPY = "SNAPPY"

