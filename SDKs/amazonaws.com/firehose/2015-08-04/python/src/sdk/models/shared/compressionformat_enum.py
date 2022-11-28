from dataclasses import dataclass, field
from enum import Enum

class CompressionFormatEnum(str, Enum):
    UNCOMPRESSED = "UNCOMPRESSED"
    GZIP = "GZIP"
    ZIP = "ZIP"
    SNAPPY = "Snappy"
    HADOOP_SNAPPY = "HADOOP_SNAPPY"

