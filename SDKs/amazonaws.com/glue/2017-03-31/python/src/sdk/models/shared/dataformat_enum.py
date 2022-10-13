from dataclasses import dataclass, field
from typing import Enum

class DataFormatEnum(str, Enum):
    AVRO = "AVRO"
    JSON = "JSON"

