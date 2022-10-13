from dataclasses import dataclass, field
from typing import Enum

class ExportDataFormatEnum(str, Enum):
    CSV = "CSV"
    GRAPHML = "GRAPHML"

