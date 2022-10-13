from dataclasses import dataclass, field
from typing import Enum

class AggregatedSourceTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATION = "ORGANIZATION"

