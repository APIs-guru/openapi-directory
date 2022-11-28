from dataclasses import dataclass, field
from enum import Enum

class ReturnConsumedCapacityEnum(str, Enum):
    INDEXES = "INDEXES"
    TOTAL = "TOTAL"
    NONE = "NONE"

