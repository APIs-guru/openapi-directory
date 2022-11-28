from dataclasses import dataclass, field
from enum import Enum

class ExportDataFormatEnum(str, Enum):
    CSV = "CSV"
    GRAPHML = "GRAPHML"

