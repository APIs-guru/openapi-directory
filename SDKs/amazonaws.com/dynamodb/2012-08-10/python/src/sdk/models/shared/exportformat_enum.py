from dataclasses import dataclass, field
from typing import Enum

class ExportFormatEnum(str, Enum):
    DYNAMODB_JSON = "DYNAMODB_JSON"
    ION = "ION"

