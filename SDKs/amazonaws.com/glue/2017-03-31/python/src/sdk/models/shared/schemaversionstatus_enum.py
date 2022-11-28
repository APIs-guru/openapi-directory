from dataclasses import dataclass, field
from enum import Enum

class SchemaVersionStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PENDING = "PENDING"
    FAILURE = "FAILURE"
    DELETING = "DELETING"

