from dataclasses import dataclass, field
from typing import Enum

class FileTypeEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"
    PARQUET = "PARQUET"

