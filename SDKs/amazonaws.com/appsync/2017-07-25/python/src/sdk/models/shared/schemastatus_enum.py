from dataclasses import dataclass, field
from typing import Enum

class SchemaStatusEnum(str, Enum):
    PROCESSING = "PROCESSING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    FAILED = "FAILED"
    SUCCESS = "SUCCESS"
    NOT_APPLICABLE = "NOT_APPLICABLE"

