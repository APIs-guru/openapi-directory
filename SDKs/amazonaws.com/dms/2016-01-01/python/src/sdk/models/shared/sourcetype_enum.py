from dataclasses import dataclass, field
from enum import Enum

class SourceTypeEnum(str, Enum):
    REPLICATION_INSTANCE = "replication-instance"

