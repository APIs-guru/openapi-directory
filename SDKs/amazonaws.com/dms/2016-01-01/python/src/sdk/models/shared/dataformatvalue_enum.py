from dataclasses import dataclass, field
from enum import Enum

class DataFormatValueEnum(str, Enum):
    CSV = "csv"
    PARQUET = "parquet"

