from dataclasses import dataclass, field
from typing import Enum

class ReportFormatEnum(str, Enum):
    TEXT_O_RCSV = "textORcsv"
    PARQUET = "Parquet"

