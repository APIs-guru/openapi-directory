from dataclasses import dataclass, field
from typing import Enum

class CsvHeaderOptionEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"

