from dataclasses import dataclass, field
from enum import Enum

class WarmPoolStatusEnum(str, Enum):
    PENDING_DELETE = "PendingDelete"

