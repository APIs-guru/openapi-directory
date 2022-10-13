from dataclasses import dataclass, field
from typing import Enum

class ParquetVersionValueEnum(str, Enum):
    PARQUET_1_0 = "parquet-1-0"
    PARQUET_2_0 = "parquet-2-0"

