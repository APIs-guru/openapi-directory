from dataclasses import dataclass, field
from enum import Enum

class DatasetActionTypeEnum(str, Enum):
    QUERY = "QUERY"
    CONTAINER = "CONTAINER"

