from dataclasses import dataclass, field
from enum import Enum

class CacheClusterStatusEnum(str, Enum):
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
    AVAILABLE = "AVAILABLE"
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"
    NOT_AVAILABLE = "NOT_AVAILABLE"
    FLUSH_IN_PROGRESS = "FLUSH_IN_PROGRESS"

