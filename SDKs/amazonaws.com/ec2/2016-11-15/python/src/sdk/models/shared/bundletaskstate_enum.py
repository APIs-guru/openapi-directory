from dataclasses import dataclass, field
from enum import Enum

class BundleTaskStateEnum(str, Enum):
    PENDING = "pending"
    WAITING_FOR_SHUTDOWN = "waiting-for-shutdown"
    BUNDLING = "bundling"
    STORING = "storing"
    CANCELLING = "cancelling"
    COMPLETE = "complete"
    FAILED = "failed"

