from dataclasses import dataclass, field
from enum import Enum

class AggregatedSourceTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATION = "ORGANIZATION"

