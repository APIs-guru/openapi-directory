from dataclasses import dataclass, field
from enum import Enum

class ColumnStatisticsTypeEnum(str, Enum):
    BOOLEAN = "BOOLEAN"
    DATE = "DATE"
    DECIMAL = "DECIMAL"
    DOUBLE = "DOUBLE"
    LONG = "LONG"
    STRING = "STRING"
    BINARY = "BINARY"

