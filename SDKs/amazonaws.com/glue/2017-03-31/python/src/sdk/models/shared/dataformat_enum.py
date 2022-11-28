from dataclasses import dataclass, field
from enum import Enum

class DataFormatEnum(str, Enum):
    AVRO = "AVRO"
    JSON = "JSON"

