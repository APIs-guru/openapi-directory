from dataclasses import dataclass, field
from typing import Enum

class SchemaStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PENDING = "PENDING"
    DELETING = "DELETING"

