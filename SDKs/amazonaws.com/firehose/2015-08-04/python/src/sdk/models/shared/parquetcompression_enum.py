from dataclasses import dataclass, field
from enum import Enum

class ParquetCompressionEnum(str, Enum):
    UNCOMPRESSED = "UNCOMPRESSED"
    GZIP = "GZIP"
    SNAPPY = "SNAPPY"

