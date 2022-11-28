from dataclasses import dataclass, field
from enum import Enum

class AliasLifecycleEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    CREATE_FAILED = "CREATE_FAILED"
    DELETE_FAILED = "DELETE_FAILED"

