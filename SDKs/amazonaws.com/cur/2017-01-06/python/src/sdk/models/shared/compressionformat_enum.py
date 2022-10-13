from dataclasses import dataclass, field
from typing import Enum

class CompressionFormatEnum(str, Enum):
    ZIP = "ZIP"
    GZIP = "GZIP"
    PARQUET = "Parquet"

