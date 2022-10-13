from dataclasses import dataclass, field
from typing import Enum

class ReturnConsumedCapacityEnum(str, Enum):
    INDEXES = "INDEXES"
    TOTAL = "TOTAL"
    NONE = "NONE"

