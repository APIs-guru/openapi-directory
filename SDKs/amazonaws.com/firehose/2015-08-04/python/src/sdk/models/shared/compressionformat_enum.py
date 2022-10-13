from dataclasses import dataclass, field
from typing import Enum

class CompressionFormatEnum(str, Enum):
    UNCOMPRESSED = "UNCOMPRESSED"
    GZIP = "GZIP"
    ZIP = "ZIP"
    SNAPPY = "Snappy"
    HADOOP_SNAPPY = "HADOOP_SNAPPY"

