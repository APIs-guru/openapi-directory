from dataclasses import dataclass, field
from enum import Enum

class ParquetWriterVersionEnum(str, Enum):
    V1 = "V1"
    V2 = "V2"

