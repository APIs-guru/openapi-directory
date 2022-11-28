from dataclasses import dataclass, field
from enum import Enum

class SchemaExtensionStatusEnum(str, Enum):
    INITIALIZING = "Initializing"
    CREATING_SNAPSHOT = "CreatingSnapshot"
    UPDATING_SCHEMA = "UpdatingSchema"
    REPLICATING = "Replicating"
    CANCEL_IN_PROGRESS = "CancelInProgress"
    ROLLBACK_IN_PROGRESS = "RollbackInProgress"
    CANCELLED = "Cancelled"
    FAILED = "Failed"
    COMPLETED = "Completed"

