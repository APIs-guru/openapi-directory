from dataclasses import dataclass, field
from typing import Enum

class DatasetActionTypeEnum(str, Enum):
    QUERY = "QUERY"
    CONTAINER = "CONTAINER"

