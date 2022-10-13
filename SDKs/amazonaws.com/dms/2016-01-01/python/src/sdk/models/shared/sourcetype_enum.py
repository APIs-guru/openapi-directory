from dataclasses import dataclass, field
from typing import Enum

class SourceTypeEnum(str, Enum):
    REPLICATION_INSTANCE = "replication-instance"

