from dataclasses import dataclass, field
from typing import Enum

class AggregationTypeEnum(str, Enum):
    NONE = "None"
    SINGLE_FILE = "SingleFile"

