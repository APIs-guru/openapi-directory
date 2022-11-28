from dataclasses import dataclass, field
from enum import Enum

class SchemaStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PENDING = "PENDING"
    DELETING = "DELETING"

