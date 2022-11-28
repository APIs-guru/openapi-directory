from dataclasses import dataclass, field
from enum import Enum

class CompressionFormatEnum(str, Enum):
    ZIP = "ZIP"
    GZIP = "GZIP"
    PARQUET = "Parquet"

