from dataclasses import dataclass, field
from enum import Enum

class AggregationTypeEnum(str, Enum):
    NONE = "None"
    SINGLE_FILE = "SingleFile"

