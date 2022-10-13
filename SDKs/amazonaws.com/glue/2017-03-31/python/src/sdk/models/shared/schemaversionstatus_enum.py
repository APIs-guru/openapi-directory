from dataclasses import dataclass, field
from typing import Enum

class SchemaVersionStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PENDING = "PENDING"
    FAILURE = "FAILURE"
    DELETING = "DELETING"

