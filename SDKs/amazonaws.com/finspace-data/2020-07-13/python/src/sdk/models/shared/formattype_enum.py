from dataclasses import dataclass, field
from enum import Enum

class FormatTypeEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"
    PARQUET = "PARQUET"
    XML = "XML"

