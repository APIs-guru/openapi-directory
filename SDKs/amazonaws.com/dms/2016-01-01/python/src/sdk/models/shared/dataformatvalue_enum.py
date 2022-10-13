from dataclasses import dataclass, field
from typing import Enum

class DataFormatValueEnum(str, Enum):
    CSV = "csv"
    PARQUET = "parquet"

