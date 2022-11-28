from dataclasses import dataclass, field
from enum import Enum

class FileFormatTypeEnum(str, Enum):
    JSON = "JSON"
    PARQUET = "PARQUET"

