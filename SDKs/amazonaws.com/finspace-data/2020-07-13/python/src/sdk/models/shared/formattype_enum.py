from dataclasses import dataclass, field
from typing import Enum

class FormatTypeEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"
    PARQUET = "PARQUET"
    XML = "XML"

