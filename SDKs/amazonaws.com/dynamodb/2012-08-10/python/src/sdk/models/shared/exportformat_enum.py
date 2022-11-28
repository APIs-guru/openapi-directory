from dataclasses import dataclass, field
from enum import Enum

class ExportFormatEnum(str, Enum):
    DYNAMODB_JSON = "DYNAMODB_JSON"
    ION = "ION"

