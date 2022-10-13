from dataclasses import dataclass, field
from typing import Enum

class FileFormatTypeEnum(str, Enum):
    JSON = "JSON"
    PARQUET = "PARQUET"

