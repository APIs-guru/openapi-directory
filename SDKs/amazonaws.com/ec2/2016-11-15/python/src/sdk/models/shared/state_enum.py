from dataclasses import dataclass, field
from enum import Enum

class StateEnum(str, Enum):
    PENDING_ACCEPTANCE = "PendingAcceptance"
    PENDING = "Pending"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    DELETED = "Deleted"
    REJECTED = "Rejected"
    FAILED = "Failed"
    EXPIRED = "Expired"

